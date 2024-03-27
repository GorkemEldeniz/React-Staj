/* eslint-disable no-mixed-spaces-and-tabs */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../../../components/ui/input";
import Options from "./Options";

export default function SearchInput() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [city, setCity] = useState("");
	const [debouncedValue] = useDebounce(city, 300);
	const [filteredCities, setFilteredCities] = useState<
		| {
				lon: string;
				lat: string;
				formatted: string;
		  }[]
		| undefined
	>(undefined);

	useEffect(() => {
		const url = new URL(`${import.meta.env.VITE_AUTOCOMPLETE_API_URL}`);
		url.searchParams.append(
			"apiKey",
			import.meta.env.VITE_AUTOCOMPLETE_API_KEY
		);

		async function fetchCities() {
			if (!debouncedValue.length) {
				setFilteredCities(undefined);
				return;
			}

			url.searchParams.append("text", debouncedValue.toLocaleUpperCase("en"));
			try {
				const { data } = await axios.get(url.href);

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const formattedData = data?.features.map((feature: any) => {
					const {
						properties: { formatted, lat, lon },
					} = feature;
					return {
						formatted,
						lat,
						lon,
					};
				});
				setFilteredCities(formattedData);
			} catch (error) {
				setIsLoading(false);
				if (axios.isAxiosError(error)) {
					setError(error.message);
				} else {
					setError("Error occcurs!");
				}
			}
		}

		fetchCities();
	}, [debouncedValue]);

	return (
		<div>
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

			{!filteredCities?.some(
				(filteredCity) => filteredCity.formatted === city
			) ? (
				<Options
					setCity={setCity}
					filteredCities={filteredCities}
					setIsLoading={setIsLoading}
				/>
			) : undefined}
		</div>
	);
}
