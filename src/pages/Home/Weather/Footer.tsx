import { Link } from "react-router-dom";

export default function WeatherFooter() {
	return (
		<footer className='flex justify-end'>
			<Link
				to='detail'
				className='inline-block px-4 py-2 text-gray-100 bg-gray-700 rounded-md cursor-pointer hover:opacity-50'
			>
				More Details
			</Link>
		</footer>
	);
}
