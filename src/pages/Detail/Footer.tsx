import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DetailFooter() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<footer className='flex justify-end'>
			<button
				onClick={() => {
					dispatch(setWeather(undefined));
					navigate("/");
				}}
				className='inline-block px-4 py-2 text-gray-100 bg-gray-700 rounded-md cursor-pointer hover:opacity-50'
			>
				Go Home
			</button>
		</footer>
	);
}
