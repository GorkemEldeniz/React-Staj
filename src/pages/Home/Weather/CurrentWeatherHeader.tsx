import {
	convertDateToReadableFormat,
	getTimePeriodBasedOnSunset,
} from "@/helpers";
import { imagesMap } from "./images-map";
import type { Root } from "./type";

export default function CurrentWeatherHeader({
	weatherData,
}: {
	weatherData: Root;
}) {
	const { temp, dt, weather, sunset } = weatherData.list[0];
	const { main, description } = weather[0];

	const timePeriod = getTimePeriodBasedOnSunset(sunset);
	const adjustedLocalDateTime = new Date(
		dt * 1000 + weatherData.city.timezone * 1000
	);
	const readabledDate = convertDateToReadableFormat(adjustedLocalDateTime);
	const matchedImage = imagesMap.find(
		({ weather, descriptions, period }) =>
			weather === main &&
			descriptions.includes(description) &&
			timePeriod === period
	);

	return (
		<section className='relative p-3 rounded-md'>
			<img
				className='absolute inset-0 w-full h-full'
				src={matchedImage?.image_path}
				alt={matchedImage?.weather}
			/>
			<header className='p-5 space-y-[2px] text-gray-100 mb-[83px] relative z-10'>
				<h2 className='text-heading-sm'>
					{weatherData.city.name}, {weatherData.city.country}
				</h2>
				<p className='text-xs'>{readabledDate}</p>
			</header>
			<div className='relative z-10 flex justify-between'>
				<div className='pt-6 pb-4 pl-4 text-white'>
					<h1 className='text-heading-xl'>{Math.round(temp.day)}&deg;c</h1>
					<p className='text-heading-sm'>
						{Math.round(temp.min)}&deg;c &thinsp;/&thinsp;
						{Math.round(temp.max)}&deg;c
						<br />
						<span className='text-sm'>{weather[0].description}</span>
					</p>
				</div>

				<img
					className='w-[10rem] h-[10rem] relative'
					src={matchedImage?.icon_path}
					alt={matchedImage?.weather}
				/>
			</div>
		</section>
	);
}
