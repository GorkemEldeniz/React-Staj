import { CircleNotch } from "@phosphor-icons/react";

export interface LocationOption {
	label: string;
	value: {
		name: string;
		latitude: number;
		longitude: number;
		country: string;
		admin1?: string;
	};
}

interface OptionsProps {
	options: LocationOption[];
	onOptionClick: (option: LocationOption) => Promise<void>;
	isLoading: boolean;
}

export default function Options({
	options,
	onOptionClick,
	isLoading,
}: OptionsProps) {
	if (isLoading) {
		return (
			<div className='flex items-center justify-center p-4'>
				<CircleNotch className='w-6 h-6 text-gray-100 animate-spin' />
			</div>
		);
	}

	if (options.length === 0) {
		return (
			<div className='p-4 text-center text-gray-100'>No locations found</div>
		);
	}

	return (
		<ul className='divide-y divide-gray-600'>
			{options.map((option, index) => (
				<li
					key={index}
					className='px-4 py-2 text-gray-100 cursor-pointer hover:bg-gray-600'
					onClick={() => onOptionClick(option)}
				>
					{option.label}
				</li>
			))}
		</ul>
	);
}
