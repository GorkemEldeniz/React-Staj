import { metersPerSecondToKilometersPerHour } from "@/helpers";
import {
	CloudRain,
	Drop,
	Sun,
	ThermometerSimple,
	Wind,
} from "@phosphor-icons/react";
import type { List } from "./type";

export default function WeatherContent({
	currentWeatherData,
}: {
	currentWeatherData: List;
}) {
	return (
		<section className='px-4 py-1 bg-gray-700 rounded-md'>
			<ol className='text-gray-200'>
				<li className='flex items-center justify-between gap-3 py-4 border-b-[1px] border-b-gray-600'>
					<ThermometerSimple className='fill-gray-500' size={24} />
					<span>Thermal sensation</span>
					<span className='ml-auto'>
						{Math.ceil(currentWeatherData.feels_like.day)}&deg;c
					</span>
				</li>
				<li className='flex items-center justify-between gap-3 py-4 border-b-[1px] border-b-gray-600'>
					<CloudRain className='fill-gray-500' size={24} />
					<span>Probability of rain</span>
					<span className='ml-auto'>
						{Math.ceil(currentWeatherData?.pop * 100) || "0"}&#37;
					</span>
				</li>
				<li className='flex items-center justify-between gap-3 py-4 border-b-[1px] border-b-gray-600'>
					<Wind className='fill-gray-500' size={24} />
					<span>Wind speed</span>
					<span className='ml-auto'>
						{metersPerSecondToKilometersPerHour(currentWeatherData.gust)}
						&thinsp; km/h
					</span>
				</li>
				<li className='flex items-center justify-between gap-3 py-4 border-b-[1px] border-b-gray-600'>
					<Drop className='fill-gray-500' size={24} />
					<span>Air humidity</span>
					<span className='ml-auto'>{currentWeatherData.humidity}%</span>
				</li>
				<li className='flex items-center justify-between gap-3 py-4'>
					<Sun className='fill-gray-500' size={24} />
					<span>UV Index</span>
					<span className='ml-auto'>5</span>
				</li>
			</ol>
		</section>
	);
}
