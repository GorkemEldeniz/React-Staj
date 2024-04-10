import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import { House } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function WeatherFooter() {
	const dispatch = useDispatch();
	return (
		<footer className='flex justify-between'>
			<button
				className='inline-block px-4 py-2 text-gray-100 bg-gray-700 rounded-md cursor-pointer hover:opacity-50'
				onClick={() => {
					dispatch(setWeather(undefined));
				}}
			>
				<House size={24} />
			</button>
			<Link
				to='detail'
				className='inline-block px-4 py-2 text-gray-100 bg-gray-700 rounded-md cursor-pointer hover:opacity-50'
			>
				More Details
			</Link>
		</footer>
	);
}
