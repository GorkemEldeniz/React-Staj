import type { RootState } from "@/lib/Redux/store";
import { useSelector } from "react-redux";

export const useWeather = () =>
	useSelector((state: RootState) => state.weather.weather);
