import { useLocation } from "@/hooks/useLocation";
import SearchWrapper from "./Search";
import WeatherWrapper from "./Weather";

export default function Home() {
	const isLocationExist = useLocation()?.name;
	return <>{!isLocationExist ? <SearchWrapper /> : <WeatherWrapper />}</>;
}
