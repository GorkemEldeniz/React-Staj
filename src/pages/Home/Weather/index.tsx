import { useWeather } from "@/hooks/useWeather";
import WeatherContent from "./Content";
import WeatherFooter from "./Footer";
import WeatherForecastList from "./ForecastList";
import WeatherHeader from "./Header";

export default function WeatherWrapper() {
	const weatherData = useWeather();

	if (!weatherData || !Object.keys(weatherData)) return;

	const currentWeatherData = weatherData?.list[0];

	return (
		<main className='p-2 space-y-2 bg-gray-900'>
			<WeatherHeader weatherData={weatherData} />
			<WeatherContent currentWeatherData={currentWeatherData} />
			<WeatherForecastList
				timezone={weatherData.city.timezone}
				list={weatherData.list}
			/>
			<WeatherFooter />
		</main>
	);
}
