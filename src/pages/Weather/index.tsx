import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Weather() {
	const [weatherData, setWeatherData] = useState(undefined);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const url = new URL(`${import.meta.env.VITE_OPEN_WHEATHER_URL}`);
		url.searchParams.append("appid", import.meta.env.VITE_OPEN_WHEATHER_KEY);
		url.searchParams.append("lat", searchParams.get("lat") as string);
		url.searchParams.append("lon", searchParams.get("lon") as string);

		async function fetchWeather() {
			try {
				const { data } = await axios.get(url.href);
				setWeatherData(data);
				console.log(data);
			} catch (er) {
				console.log(er);
			}
		}
		fetchWeather();
	}, [searchParams]);

	return (
		<pre className='text-xs text-gray-200'>
			{JSON.stringify(weatherData, null, 2)}
		</pre>
	);
}
