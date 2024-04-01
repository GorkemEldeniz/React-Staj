/* eslint-disable no-mixed-spaces-and-tabs */
import { Input } from "@/components/ui/input";
import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { GpsFix } from "@phosphor-icons/react";
import { useGeolocation } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import * as z from "zod";
import Options from "./Options";
import { fetchGeocodeData, fetchWeatherData } from "./action";

export interface Root {
	name: string;
	lat: number;
	lon: number;
	country: string;
	state: string;
}

const formDataSchema = z.object({
	city: z.string().min(1).max(22),
});

type FormData = z.infer<typeof formDataSchema>;

export default function SearchInput() {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting, errors, isValid, isSubmitted },
		setValue,
		setError,
		setFocus,
	} = useForm<FormData>({
		resolver: zodResolver(formDataSchema),
		shouldFocusError: true,
	});

	const city = watch("city");

	const {
		loading,
		latitude,
		longitude,
		error: geoLocationError,
	} = useGeolocation();
	const [debouncedValue] = useDebounce(city, 300);
	const [filteredCities, setFilteredCities] = useState<Root[] | undefined>(
		undefined
	);

	const submitButtonRef = useRef<HTMLButtonElement>(null);
	const handleCurrentLocation = async () => {
		if (geoLocationError || !latitude || !longitude) {
			console.log(geoLocationError?.message);
			return;
		}
		const { data: weatherData } = await fetchWeatherData(latitude, longitude);

		if (!weatherData) {
			setError("city", {
				message: "No weather information found!!",
			});
			return;
		}

		dispatch(setWeather(weatherData));
	};

	const onSubmit = async (data: FormData) => {
		const { city } = data;
		const { data: geocodeData } = await fetchGeocodeData(city);

		if (!geocodeData || !geocodeData.length) {
			setError("city", {
				message: "No location found!!",
			});
			return;
		}

		const { lat, lon } = geocodeData[0];
		const { data: weatherData } = await fetchWeatherData(lat, lon);

		if (!weatherData) {
			setError("city", {
				message: "No weather information found!!",
			});
			return;
		}

		dispatch(setWeather(weatherData));
	};

	useEffect(() => {
		setFocus("city");
		async function fetchAutoCompleteData() {
			if (!debouncedValue || !debouncedValue.length) {
				setFilteredCities(undefined);
				return;
			}

			const { data: geocodeData } = await fetchGeocodeData(debouncedValue);
			setFilteredCities(geocodeData);
		}
		fetchAutoCompleteData();
	}, [debouncedValue]);

	return (
		<form action='' onSubmit={handleSubmit(onSubmit)}>
			<div className='flex items-center gap-2'>
				<Input
					{...register("city", {
						required: true,
					})}
					autoComplete='off'
					error={!isValid && isSubmitted}
					isLoading={isSubmitting}
					placeholder='Search location'
					className='truncate'
				/>

				{!geoLocationError?.message ? (
					<button
						type='button'
						disabled={loading || isSubmitting}
						onClick={handleCurrentLocation}
						className='p-4 text-gray-100 bg-gray-700 rounded-md cursor-pointer disabled:opacity-70'
					>
						<GpsFix size={24} />
					</button>
				) : undefined}
			</div>

			{!isValid && isSubmitted ? (
				<p className='mt-2 text-red-200'>{errors.city?.message}</p>
			) : undefined}

			<div className='space-y-[1px] mt-2 overflow-y-auto'>
				{!isSubmitting && filteredCities ? (
					<Options
						setValue={setValue}
						filteredCities={filteredCities}
						submitButtonRef={submitButtonRef}
					/>
				) : undefined}
			</div>
			<button ref={submitButtonRef} type='submit' className='sr-only'>
				Submit
			</button>
		</form>
	);
}
