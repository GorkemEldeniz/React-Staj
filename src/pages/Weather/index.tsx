import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CurrentWeatherContent from "./CurrentWeatherContent";
import CurrentWeatherHeader from "./CurrentWeatherHeader";
import type { Root } from "./type";
import WeatherForecastList from "./WeatherForecastList";

export default function Weather() {
	const [weatherData, setWeatherData] = useState<Root | undefined>(undefined);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const url = new URL(`${import.meta.env.VITE_OPEN_WHEATHER_URL}`);
		url.searchParams.append("lat", searchParams.get("lat") as string);
		url.searchParams.append("lon", searchParams.get("lon") as string);

		async function fetchWeather() {
			try {
				const { data } = (await axios.get(url.href)) as { data: Root };

				setWeatherData(data);
			} catch (er) {
				console.log(er);
			}
		}
		fetchWeather();
	}, [searchParams]);

	if (!weatherData) return <div>Loading...</div>;

	const currentWeatherData = weatherData.list[0];

	return (
		<div className='p-2 space-y-2'>
			<CurrentWeatherHeader weatherData={weatherData} />
			<CurrentWeatherContent currentWeatherData={currentWeatherData} />
			<WeatherForecastList
				timezone={weatherData.city.timezone}
				list={weatherData.list}
			/>
		</div>
	);
}
