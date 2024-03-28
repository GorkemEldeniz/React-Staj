import { useWeather } from "@/hooks/useWeather";
import SearchWrapper from "./Search";
import WeatherWrapper from "./Weather";

export default function Home() {
	const isLocationExist = useWeather()?.city;
	return <>{!isLocationExist ? <SearchWrapper /> : <WeatherWrapper />}</>;
}
