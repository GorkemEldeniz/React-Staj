import axios from "axios";
import type { Root as GeocodeRoot } from ".";
import type { Root as WeatherRoot } from "../../Weather/type";

const fetchGeocodeData = (searchParam: string) => {
	const url = new URL(`${import.meta.env.VITE_OPENWHEATHER_GEOCODE_URL}`);
	url.searchParams.append("q", searchParam.toLocaleUpperCase("en"));
	return axios.get<GeocodeRoot[]>(url.href);
};

const fetchWeatherData = (lat: number, lon: number) => {
	const url = new URL(`${import.meta.env.VITE_OPENWHEATHER_FORECAST_URL}`);
	url.searchParams.append("lat", String(lat));
	url.searchParams.append("lon", String(lon));
	return axios.get<WeatherRoot>(url.href);
};

export { fetchGeocodeData, fetchWeatherData };
