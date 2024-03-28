import axios from "axios";
import type { Root } from ".";

const fetchGeocodeData = (searchParam: string) => {
	const url = new URL(`${import.meta.env.VITE_OPENWHEATHER_GEOCODE_URL}`);
	url.searchParams.append("q", searchParam.toLocaleUpperCase("en"));
	return axios.get<Root[]>(url.href);
};

export default fetchGeocodeData;
