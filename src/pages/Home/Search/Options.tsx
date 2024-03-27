/* eslint-disable no-mixed-spaces-and-tabs */
import { createSearchParams, useNavigate } from "react-router-dom";

interface OptionsProps {
	filteredCities?: {
		lon: string;
		lat: string;
		formatted: string;
	}[];
	setCity: React.Dispatch<React.SetStateAction<string>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Options({
	filteredCities,
	setCity,
	setIsLoading,
}: OptionsProps) {
	const navigate = useNavigate();

	return (
		<div className='space-y-[1px] mt-2 max-h-[400px] overflow-y-auto'>
			{filteredCities
				? filteredCities.map((filteredCity, index) => (
						<button
							onClick={() => {
								setCity(filteredCity.formatted);
								setIsLoading(true);

								navigate({
									pathname: "weather",
									search: createSearchParams({
										lat: filteredCity.lat,
										lon: filteredCity.lon,
									}).toString(),
								});
							}}
							className='block w-full px-5 py-4 text-left text-gray-100 bg-gray-500 first-of-type:rounded-t-md last-of-type:rounded-b-md text-md'
							key={index}
						>
							{filteredCity.formatted}
						</button>
				  ))
				: undefined}
		</div>
	);
}