/* eslint-disable no-mixed-spaces-and-tabs */
import { Input } from "@/components/ui/input";
import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { GpsFix } from "@phosphor-icons/react";
import { useDebounce, useGeolocation } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";
import Options, { LocationOption } from "../Options";
import {
	fetchGeocodeData,
	fetchReverseGeocode,
	fetchWeatherData,
} from "./action";

export interface Root {
	name: string;
	latitude: number;
	longitude: number;
	country: string;
	admin1?: string;
}

const formDataSchema = z.object({
	city: z.string().min(1).max(22),
});

type FormData = z.infer<typeof formDataSchema>;

export default function SearchInput() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [filteredCities, setFilteredCities] = useState<LocationOption[]>();
	const optionsRef = useRef<HTMLDivElement>(null);
	const { latitude, longitude } = useGeolocation();

	const {
		register,
		watch,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formDataSchema),
	});

	const debouncedValue = useDebounce(watch("city"), 500);

	useEffect(() => {
		async function fetchAutoCompleteData() {
			if (!debouncedValue) {
				setFilteredCities(undefined);
				return;
			}

			const geocodeData = await fetchGeocodeData(debouncedValue);

			if (!geocodeData?.length) {
				setFilteredCities([]);
				return;
			}

			setFilteredCities(
				geocodeData.map((d: Root) => ({
					label: `${d.name}, ${d.admin1 || ""}, ${d.country}`,
					value: d,
				}))
			);
		}
		fetchAutoCompleteData();
	}, [debouncedValue]);

	const handleOptionClick = async (option: LocationOption) => {
		setIsLoading(true);

		try {
			const weatherData = await fetchWeatherData(
				option.value.latitude,
				option.value.longitude
			);

			if (!weatherData) {
				setIsLoading(false);
				return;
			}

			// Fill in city data from geocoding
			weatherData.city.name = option.value.name;
			weatherData.city.country = option.value.country;

			dispatch(setWeather(weatherData));
		} catch (error) {
			console.error("Error fetching weather data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleGeoLocationClick = async () => {
		if (!latitude || !longitude) return;

		setIsLoading(true);

		try {
			const location = await fetchReverseGeocode(latitude, longitude);

			if (!location) {
				console.error("Could not find location data");
				setIsLoading(false);
				return;
			}

			const weatherData = await fetchWeatherData(latitude, longitude);

			if (!weatherData) {
				setIsLoading(false);
				return;
			}

			// Fill in city data from reverse geocoding
			weatherData.city.name = location.name;
			weatherData.city.country = location.country;

			dispatch(setWeather(weatherData));
		} catch (error) {
			console.error("Error fetching weather data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className='relative'>
			<div className='flex gap-2'>
				<Input
					{...register("city")}
					className='text-gray-100 bg-gray-700'
					placeholder='Search for a city...'
					disabled={isLoading}
				/>
				<button
					onClick={handleGeoLocationClick}
					className='p-3 text-gray-100 bg-gray-700 rounded-md hover:opacity-50'
				>
					<GpsFix size={24} />
				</button>
			</div>
			{errors.city && (
				<span className='text-sm text-red-500'>{errors.city.message}</span>
			)}
			{filteredCities && (
				<div
					ref={optionsRef}
					className='absolute z-10 w-full mt-2 overflow-hidden bg-gray-700 rounded-md'
				>
					<Options
						options={filteredCities}
						onOptionClick={handleOptionClick}
						isLoading={isLoading}
					/>
				</div>
			)}
		</div>
	);
}
