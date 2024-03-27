import clearDay from "@/assets/background/clear-day.png";
import clearNight from "@/assets/background/clear-night.png";
import cloudyDay from "@/assets/background/cloudy-day.png";
import cloudyNight from "@/assets/background/cloudy-night.png";
import partlyCloudyDay from "@/assets/background/partly-cloudy-day.png";
import partlyCloudyNight from "@/assets/background/partly-cloudy-night.png";
import rainyDay from "@/assets/background/rainy-day.png";
import rainyNight from "@/assets/background/rainy-night.png";
import thunderstormDay from "@/assets/background/thunderstorm-day.png";
import thunderstormNight from "@/assets/background/thunderstorm-night.png";

import clearDayIcon from "@/assets/icons/wheather/clear-day.svg";
import clearNightIcon from "@/assets/icons/wheather/clear-night.svg";
import cloudyDayIcon from "@/assets/icons/wheather/cloudy-day.svg";
import cloudyNightIcon from "@/assets/icons/wheather/cloudy-night.svg";
import partlyCloudyIcon from "@/assets/icons/wheather/partly-cloudy.svg";
import rainyDayIcon from "@/assets/icons/wheather/rainy-day.svg";
import rainyNightIcon from "@/assets/icons/wheather/rainy-night.svg";
import thunderstormIcon from "@/assets/icons/wheather/thunderstorm.svg";

export const backgroundImageMaps = [
	{
		weather: "Clear",
		period: "night",
		descriptions: ["clear sky", "sky is clear"],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={clearNight}
				alt='Clear night'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={clearNightIcon}
				alt='Clear night icon'
			/>
		),
	},
	{
		weather: "Clear",
		period: "day",
		descriptions: ["clear sky", "sky is clear"],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={clearDay}
				alt='Clear day'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={clearDayIcon}
				alt='Clear day icon'
			/>
		),
	},
	{
		weather: "Clouds",
		period: "night",
		descriptions: [
			"overcast clouds",
			"broken clouds",
			"overcast clouds",
			"scattered clouds",
		],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={cloudyNight}
				alt='Clouds night'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={cloudyNightIcon}
				alt='Cloudy night icon'
			/>
		),
	},
	{
		weather: "Clouds",
		period: "day",
		descriptions: [
			"overcast clouds",
			"broken clouds",
			"overcast clouds",
			"scattered clouds",
		],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={cloudyDay}
				alt='Clouds day'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={cloudyDayIcon}
				alt='Cloudy day icon'
			/>
		),
	},
	{
		weather: "Clouds",
		period: "night",
		descriptions: ["few clouds"],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={partlyCloudyNight}
				alt='Clouds night'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={partlyCloudyIcon}
				alt='Partly cloudy night icon'
			/>
		),
	},
	{
		weather: "Clouds",
		period: "day",
		descriptions: ["few clouds"],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={partlyCloudyDay}
				alt='Clouds day'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={partlyCloudyIcon}
				alt='Partly cloudy day icon'
			/>
		),
	},
	{
		weather: "Rain",
		period: "night",
		descriptions: [
			"light rain",
			"moderate rain",
			"heavy intensity rain",
			"very heavy rain",
			"extreme rain",
			"freezing rain",
			"shower rain",
			"light intensity shower rain",
			"heavy intensity shower rain",
			"ragged shower rain",
		],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={rainyNight}
				alt='Rain night'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={rainyNightIcon}
				alt='Rain night icon'
			/>
		),
	},
	{
		weather: "Rain",
		period: "day",
		descriptions: [
			"light rain",
			"moderate rain",
			"heavy intensity rain",
			"very heavy rain",
			"extreme rain",
			"freezing rain",
			"shower rain",
			"light intensity shower rain",
			"heavy intensity shower rain",
			"ragged shower rain",
		],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={rainyDay}
				alt='Rain day'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={rainyDayIcon}
				alt='Rain day icon'
			/>
		),
	},
	{
		weather: "Thunderstorm",
		period: "night",
		descriptions: [
			"thunderstorm",
			"thunderstorm with light rain",
			"thunderstorm with rain",
			"thunderstorm with heavy rain",
			"light thunderstorm",
			"heavy thunderstorm",
			"ragged thunderstorm",
		],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={thunderstormNight}
				alt='Thunderstorm night'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={thunderstormIcon}
				alt='Thunderstorm night icon'
			/>
		),
	},
	{
		weather: "Thunderstorm",
		period: "day",
		descriptions: [
			"thunderstorm",
			"thunderstorm with light rain",
			"thunderstorm with rain",
			"thunderstorm with heavy rain",
			"light thunderstorm",
			"heavy thunderstorm",
			"ragged thunderstorm",
		],
		image: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={thunderstormDay}
				alt='Thunderstorm day'
			/>
		),
		icon: (
			<img
				className='absolute inset-0 w-full h-full rounded-md'
				src={thunderstormIcon}
				alt='Thunderstorm day icon'
			/>
		),
	},
];
