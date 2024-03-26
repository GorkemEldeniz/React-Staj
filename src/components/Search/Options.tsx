/* eslint-disable no-mixed-spaces-and-tabs */
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
	return (
		<>
			{filteredCities
				? filteredCities.map((filteredCity, index) => (
						<button
							onClick={() => {
								setCity(filteredCity.formatted);
								setIsLoading(true);
							}}
							className='block w-full py-4 pl-5 text-left text-gray-100 bg-gray-500 first-of-type:rounded-t-md last-of-type:rounded-b-md text-md'
							key={index}
						>
							{filteredCity.formatted}
						</button>
				  ))
				: undefined}
		</>
	);
}
