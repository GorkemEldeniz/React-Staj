import {
	getWeekdayAbbreviation,
	metersPerSecondToKilometersPerHour,
} from "@/helpers";
import { useWeather } from "@/hooks/useWeather";
import { Navigate } from "react-router-dom";
import Header from "./Header";
import HumidityChart from "./HumidityChart";
import TempChart from "./TempChart";
import WindSpeedChart from "./WindSpeedChart";

export default function Detail() {
	const data = useWeather();

	if (!data || !Object.keys(data).length) return <Navigate to='/' />;

	const { list, city } = data;

	const tempForecastList = list.map(({ temp, dt }) => ({
		name: getWeekdayAbbreviation(new Date(dt * 1000 + city.timezone * 1000)),
		Morning: Math.ceil(temp.morn),
		Day: Math.ceil(temp.day),
		Night: Math.ceil(temp.night),
	}));

	const humidityForecastList = list.map(({ humidity, dt }) => ({
		name: getWeekdayAbbreviation(new Date(dt * 1000 + city.timezone * 1000)),
		Humidity: Math.ceil(humidity),
	}));

	const windSpeedList = list.map(({ gust, dt }) => ({
		name: getWeekdayAbbreviation(new Date(dt * 1000 + city.timezone * 1000)),
		Wind: metersPerSecondToKilometersPerHour(gust),
	}));

	return (
		<main className='min-h-screen p-2 space-y-2 bg-gray-900'>
			<Header title={city.name} />
			<TempChart tempForecastList={tempForecastList} />
			<HumidityChart humidityForecastList={humidityForecastList} />
			<WindSpeedChart windSpeedList={windSpeedList} />
		</main>
	);
}
