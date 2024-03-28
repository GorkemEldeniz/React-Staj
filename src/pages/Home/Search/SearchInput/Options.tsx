import type { Root } from ".";

/* eslint-disable no-mixed-spaces-and-tabs */
interface OptionsProps {
	filteredCities?: Root[];
	setCity: React.Dispatch<React.SetStateAction<string>>;
	submitButtonRef: React.RefObject<HTMLButtonElement>;
}

export default function Options({
	filteredCities,
	setCity,
	submitButtonRef,
}: OptionsProps) {
	return (
		<div className='space-y-[1px] mt-2 max-h-[400px] overflow-y-auto'>
			{filteredCities
				? filteredCities.map((filteredCity, index) => (
						<button
							onClick={() => {
								setCity(filteredCity.name);
								submitButtonRef.current?.click();
							}}
							type='button'
							className='block w-full px-5 py-4 text-left text-gray-100 bg-gray-500 first-of-type:rounded-t-md last-of-type:rounded-b-md text-md'
							key={index}
						>
							{filteredCity.name},{filteredCity.country}
						</button>
				  ))
				: undefined}
		</div>
	);
}
