import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import { ArrowFatLeft, House } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

export default function DetailFooter() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<footer className='flex justify-between'>
			<button
				onClick={() => {
					navigate(-1);
				}}
				className='inline-block px-4 py-2 text-gray-100 bg-gray-700 rounded-md cursor-pointer hover:opacity-50'
			>
				<ArrowFatLeft size={24} />
			</button>
			<button
				onClick={() => {
					dispatch(setWeather(undefined));
					redirect("/");
				}}
				className='inline-block px-4 py-2 text-gray-100 bg-gray-700 rounded-md cursor-pointer hover:opacity-50'
			>
				<House size={24} />
			</button>
		</footer>
	);
}
