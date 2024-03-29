import { useWeather } from "@/hooks/useWeather";
import CurrentWeatherContent from "./CurrentWeatherContent";
import CurrentWeatherHeader from "./CurrentWeatherHeader";
import WeatherForecastList from "./WeatherForecastList";

export default function WeatherWrapper() {
	const weatherData = useWeather();

	if (!weatherData?.city) return;

	const currentWeatherData = weatherData?.list[0];

	return (
		<div className='p-2 space-y-2 bg-gray-900'>
			<CurrentWeatherHeader weatherData={weatherData} />
			<CurrentWeatherContent currentWeatherData={currentWeatherData} />
			<WeatherForecastList
				timezone={weatherData.city.timezone}
				list={weatherData.list}
			/>
		</div>
	);
}
