/* eslint-disable no-mixed-spaces-and-tabs */
import { Input } from "@/components/ui/input";
import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Options from "./Options";
import { fetchGeocodeData, fetchWeatherData } from "./action";

export interface Root {
	name: string;
	lat: number;
	lon: number;
	country: string;
	state: string;
}

export default function SearchInput() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<undefined | string>(undefined);
	const [city, setCity] = useState("");
	const [debouncedValue] = useDebounce(city, 300);
	const [filteredCities, setFilteredCities] = useState<Root[] | undefined>(
		undefined
	);
	const inputRef = useRef<HTMLInputElement>(null);
	const submitButtonRef = useRef<HTMLButtonElement>(null);

	const dispatch = useDispatch();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		const target = e.currentTarget;
		const inputCity = target.city.value;
		// !TODO: validation react hook form?

		try {
			const { data: geocodeData } = await fetchGeocodeData(inputCity);
			const { lat, lon } = geocodeData[0];
			if (!lat || !lon) {
				setError("No location found");
				return;
			}

			const { data: weatherData } = await fetchWeatherData(lat, lon);
			if (!weatherData.city) {
				setError("No location found");
				return;
			}

			dispatch(setWeather(weatherData));
		} catch (error) {
			setIsLoading(false);
			if (axios.isAxiosError(error)) {
				setError(error.response?.data?.message);
			} else {
				setError("Error occurs!");
			}
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		async function fetchAutoCompleteData() {
			if (!debouncedValue.length) {
				setFilteredCities(undefined);
				return;
			}

			try {
				const { data: geocodeData } = await fetchGeocodeData(debouncedValue);
				setFilteredCities(geocodeData);
			} catch (error) {
				if (axios.isAxiosError(error)) {
					setError(error.response?.data?.message);
				} else {
					setError("Error occurs!");
				}
			}
		}
		fetchAutoCompleteData();
	}, [debouncedValue]);

	return (
		<form action='' className='relative' onSubmit={handleSubmit}>
			<Input
				ref={inputRef}
				value={city}
				onChange={(e) => {
					setCity(e.target.value);
					setError(undefined);
				}}
				name='city'
				error={error}
				isLoading={isLoading}
				className='truncate'
				type='text'
			/>

			{!isLoading ? (
				<Options
					setCity={setCity}
					filteredCities={filteredCities}
					submitButtonRef={submitButtonRef}
				/>
			) : undefined}
			<button ref={submitButtonRef} type='submit' className='sr-only'>
				Submit
			</button>
		</form>
	);
}
