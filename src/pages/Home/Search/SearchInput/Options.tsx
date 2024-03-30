import { UseFormSetValue } from "react-hook-form";
import type { Root } from ".";

/* eslint-disable no-mixed-spaces-and-tabs */
interface OptionsProps {
	filteredCities: Root[];
	setValue: UseFormSetValue<{
		city: string;
	}>;
	submitButtonRef: React.RefObject<HTMLButtonElement>;
}

export default function Options({
	filteredCities,
	setValue,
	submitButtonRef,
}: OptionsProps) {
	return (
		<>
			{filteredCities.map((filteredCity, index) => (
				<button
					onClick={() => {
						setValue("city", filteredCity.name);
						submitButtonRef.current?.click();
					}}
					type='button'
					className='block w-full px-5 py-4 text-left text-gray-100 bg-gray-500 first-of-type:rounded-t-md last-of-type:rounded-b-md text-md'
					key={index}
				>
					{filteredCity.name},{filteredCity.country}
				</button>
			))}
		</>
	);
}
