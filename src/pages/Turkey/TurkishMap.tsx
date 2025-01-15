import { setWeather } from "@/lib/Redux/features/location/locationSlice";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	fetchGeocodeData,
	fetchWeatherData,
} from "../Home/Search/SearchInput/action";
import provinceDataList from "./provinceDataList";

export default function TurkishMap() {
	const [mousePosition, setMousePosition] = useState<{
		x?: number;
		y?: number;
	}>({
		x: undefined,
		y: undefined,
	});
	const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(
		undefined
	);
	const elementRef = useRef<HTMLDivElement>(null);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const hoveredCity = hoveredIndex
		? provinceDataList.at(hoveredIndex)?.name
		: undefined;

	const handleProvinceClick = async (province: string) => {
		try {
			const geocodeData = await fetchGeocodeData(province + ", Turkey");

			if (!geocodeData?.length) {
				console.error("No location found for province:", province);
				return;
			}

			const location = geocodeData[0];
			const weatherData = await fetchWeatherData(
				location.latitude,
				location.longitude
			);

			if (!weatherData) {
				console.error("No weather data found for province:", province);
				return;
			}

			// Fill in city data from geocoding
			weatherData.city.name = location.name;
			weatherData.city.country = location.country;

			dispatch(setWeather(weatherData));
			navigate("/");
		} catch (error) {
			console.error("Error fetching weather data:", error);
		}
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const parentRect = elementRef.current?.getBoundingClientRect();

		if (!parentRect) return;
		const relativeX = mouseX - parentRect.left + 10;
		const relativeY = mouseY - parentRect.top + 10;
		setMousePosition({ x: relativeX, y: relativeY });
	};

	return (
		<div
			ref={elementRef}
			className='relative'
			onMouseOver={handleMouseMove}
			onMouseLeave={() => {
				setMousePosition({
					x: undefined,
					y: undefined,
				});
				setHoveredIndex(undefined);
			}}
		>
			<h1 className='text-center text-gray-100 text-heading-lg'>Turkey Map</h1>
			<svg
				version='1.1'
				id='svg-turkiye-haritasi'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				viewBox='0 0 1000 450'
				xmlSpace='preserve'
			>
				{provinceDataList.map(({ name, paths }, index) => (
					<g
						className={cn("fill-gray-400 cursor-pointer", {
							"fill-blue-light": hoveredIndex === index,
						})}
						onMouseOver={() => setHoveredIndex(index)}
						key={index}
						onClick={() => handleProvinceClick(name)}
					>
						{paths.map((path, idx) => (
							<path key={idx} d={path} />
						))}
					</g>
				))}
			</svg>
			<span
				style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}
				className={cn("hidden", {
					"inline-block absolute text-gray-900 bg-gray-100 p-2 rounded":
						hoveredIndex,
				})}
			>
				{hoveredCity}
			</span>
		</div>
	);
}
