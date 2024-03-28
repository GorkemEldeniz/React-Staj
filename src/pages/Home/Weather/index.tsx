import { useLocation } from "@/hooks/useLocation";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeatherContent from "./CurrentWeatherContent";
import CurrentWeatherHeader from "./CurrentWeatherHeader";
import type { Root } from "./type";
import WeatherForecastList from "./WeatherForecastList";

export default function WeatherWrapper() {
	const [weatherData, setWeatherData] = useState<Root | undefined>(undefined);
	const { lat, lon } = useLocation();

	useEffect(() => {
		const url = new URL(`${import.meta.env.VITE_OPENWHEATHER_FORECAST_URL}`);
		url.searchParams.append("lat", String(lat));
		url.searchParams.append("lon", String(lon));

		async function fetchWeather() {
			try {
				const { data } = await axios.get<Root>(url.href);

				setWeatherData(data);
			} catch (er) {
				console.log(er);
			}
		}
		fetchWeather();
	}, [lat, lon]);

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
