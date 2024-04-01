import { getWeekdayAbbreviation } from "@/helpers";
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

	return (
		<section className='bg-gray-700 rounded-md'>
			<ol className='flex justify-between p-3'>
				{list.map((l, index) => (
					<li key={index} className='px-[5.5px] py-[14px] text-center'>
						<h3 className='text-gray-200 text-heading-xs'>{days[index]}</h3>
						<img
							className='size-14'
							src={`http://openweathermap.org/img/w/${l.weather[0].icon}.png`}
							alt=''
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
