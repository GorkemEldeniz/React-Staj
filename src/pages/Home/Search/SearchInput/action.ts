import axios from "axios";
import type { Root as GeocodeRoot } from ".";

const getWeatherCode = (code: number) => {
	if (code === 0 || code === 1)
		return { main: "Clear", description: "clear sky" };
	if (code === 2) return { main: "Clouds", description: "few clouds" };
	if (code === 3) return { main: "Clouds", description: "overcast clouds" };
	if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
		return { main: "Rain", description: "light rain" };
	if ([95, 96, 99].includes(code))
		return { main: "Thunderstorm", description: "thunderstorm" };
	return { main: "Clear", description: "clear sky" };
};

const fetchGeocodeData = (searchParam: string) => {
	const url = new URL(`${import.meta.env.VITE_GEOCODING_API_URL}`);
	url.searchParams.append("name", searchParam.toLocaleUpperCase("en"));
	return axios
		.get<{ results: GeocodeRoot[] }>(url.href)
		.then((response) => response.data.results || []);
};

const fetchReverseGeocode = async (latitude: number, longitude: number) => {
	const url = new URL(`${import.meta.env.VITE_REVERSE_GEOCODING_API_URL}`);
	url.searchParams.set("latitude", String(latitude));
	url.searchParams.set("longitude", String(longitude));

	const response = await axios.get(url.href);
	const data = response.data;

	return {
		name:
			data.city || data.locality || data.localityInfo.administrative[0].name,
		latitude,
		longitude,
		country: data.countryName,
		admin1: data.principalSubdivision,
	};
};

const fetchWeatherData = async (lat: number, lon: number) => {
	const url = new URL(`${import.meta.env.VITE_WEATHER_API_URL}`);
	url.searchParams.append("latitude", String(lat));
	url.searchParams.append("longitude", String(lon));

	const response = await axios.get(url.href);
	const data = response.data;
	const now = Math.floor(Date.now() / 1000);

	return {
		city: {
			id: 1,
			name: "",
			coord: { lat, lon },
			country: "",
			population: 0,
			timezone: 0,
		},
		cod: "200",
		message: 0,
		cnt: 5,
		list: data.daily.time.map((time: string, index: number) => {
			const date = new Date(time);
			const temp = data.daily.temperature_2m_max[index];
			const tempMin = data.daily.temperature_2m_min[index];
			const apparentTemp = data.daily.apparent_temperature_max[index];

			return {
				dt: date.getTime() / 1000,
				sunrise: now,
				sunset: now + 43200,
				temp: {
					day: temp,
					min: tempMin,
					max: temp,
					night: tempMin,
					eve: temp,
					morn: tempMin,
				},
				feels_like: {
					day: apparentTemp,
					night: apparentTemp,
					eve: apparentTemp,
					morn: apparentTemp,
				},
				pressure: 1013,
				humidity: data.daily.relative_humidity_2m_max[index],
				weather: [
					{
						id: data.daily.weathercode[index],
						...getWeatherCode(data.daily.weathercode[index]),
						icon: "01d",
					},
				],
				speed: 0,
				deg: 0,
				gust: data.daily.windspeed_10m_max[index],
				clouds: 0,
				pop: data.daily.precipitation_probability_max[index] / 100,
				rain: 0,
			};
		}),
	};
};

export { fetchGeocodeData, fetchReverseGeocode, fetchWeatherData };
