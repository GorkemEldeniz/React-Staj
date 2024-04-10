import { getTimePeriodBasedOnSunset, getWeekdayAbbreviation } from "@/helpers";
import { imagesMap } from "./images-map";
import type { List } from "./type";

export default function WeatherForecastList({
	list,
	timezone,
}: {
	list: List[];
	timezone: number;
}) {
	const days = list.map((l) =>
		getWeekdayAbbreviation(new Date(l.dt * 1000 + timezone * 1000))
	);

	const getWeatherForecastIcon = (index: number) => {
		const { weather, sunset } = list[index];
		const { main, description } = weather[0];

		const timePeriod = getTimePeriodBasedOnSunset(sunset);

		return imagesMap.find(
			({ weather, descriptions, period }) =>
				weather === main &&
				descriptions.includes(description) &&
				timePeriod === period
		);
	};

	return (
		<section className='bg-gray-700 rounded-md'>
			<ol className='flex justify-between p-3'>
				{list.map((l, index) => (
					<li
						key={index}
						className='px-[5.5px] py-[14px] text-center flex flex-col gap-1 items-center justify-center'
					>
						<h3 className='text-gray-200 text-heading-xs'>{days[index]}</h3>
						<img
							className='object-contain size-14'
							src={getWeatherForecastIcon(index)?.icon_path}
							alt={getWeatherForecastIcon(index)?.weather}
						/>
						<div className='text-heading-xs'>
							<span className='text-gray-100'>
								{Math.ceil(l.temp.max)}&deg;c
							</span>
							<br />
							<span className='text-gray-400'>
								{Math.ceil(l.temp.max)}&deg;c
							</span>
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}
