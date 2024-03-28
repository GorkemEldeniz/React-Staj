/* eslint-disable no-mixed-spaces-and-tabs */
import { Input } from "@/components/ui/input";
import type { LocationState } from "@/lib/Redux/features/location/locationSlice";
import { setLocation } from "@/lib/Redux/features/location/locationSlice";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Options from "./Options";
import fetchGeocodeData from "./action";

export interface Root {
	name: string;
	lat: number;
	lon: number;
	country: string;
	state: string;
}

export default function SearchInput() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [city, setCity] = useState("");
	const [debouncedValue] = useDebounce(city, 300);
	const [filteredCities, setFilteredCities] = useState<
		LocationState[] | undefined
	>(undefined);
	const inputRef = useRef<HTMLInputElement>(null);

	const dispatch = useDispatch();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { data } = await fetchGeocodeData(city);
			const location = data[0];
			if (!location) {
				setError("No location found");
				return;
			}
			dispatch(setLocation(location));
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
				const { data } = await fetchGeocodeData(debouncedValue);

				setFilteredCities(data);
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

	useEffect(() => {
		const handleGeocodeData = async (e: KeyboardEvent) => {
			if (e.key === "Enter") {
				setIsLoading(true);
				try {
					const { data } = await fetchGeocodeData(city);
					const location = data[0];
					if (!location) {
						setError("No location found");
						return;
					}
					dispatch(setLocation(location));
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
			}
		};

		window.addEventListener("keydown", handleGeocodeData);

		return () => {
			window.removeEventListener("keydown", handleGeocodeData);
		};
	}, [city, dispatch]);

	return (
		<>
			<form action='' onSubmit={handleSubmit}>
				<Input
					ref={inputRef}
					value={city}
					onChange={(e) => {
						setCity(e.target.value);
						setError("");
					}}
					error={error}
					isLoading={isLoading}
					className='truncate'
					type='text'
				/>
			</form>

			{!isLoading ? (
				<Options
					setCity={setCity}
					filteredCities={filteredCities}
					setIsLoading={setIsLoading}
				/>
			) : undefined}
		</>
	);
}
