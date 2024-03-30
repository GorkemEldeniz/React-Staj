import { useWeather } from "@/hooks/useWeather";
import WeatherContent from "./WeatherContent";
import WeatherForecastList from "./WeatherForecastList";
import WeatherHeader from "./WeatherHeader";

export default function WeatherWrapper() {
	const weatherData = useWeather();

	if (!weatherData?.city) return;

	const currentWeatherData = weatherData?.list[0];

	return (
		<div className='min-h-screen p-2 space-y-2 bg-gray-900'>
			<WeatherHeader weatherData={weatherData} />
			<WeatherContent currentWeatherData={currentWeatherData} />
			<WeatherForecastList
				timezone={weatherData.city.timezone}
				list={weatherData.list}
			/>
		</div>
	);
}
