const getTimePeriodBasedOnSunset = (sunset: number) => {
	if (new Date().valueOf() / 1000 < sunset) {
		return "day";
	}
	return "night";
};

const convertDateToReadableFormat = (date: Date) => {
	return date.toLocaleDateString("en", {
		day: "numeric",
		weekday: "long",
		year: "numeric",
		month: "long",
	});
};

const getWeekdayAbbreviation = (date: Date) => {
	return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
};

const metersPerSecondToKilometersPerHour = (speed: number) => {
	return Math.ceil((speed * 3600) / 1000);
};

export {
	convertDateToReadableFormat,
	getTimePeriodBasedOnSunset,
	getWeekdayAbbreviation,
	metersPerSecondToKilometersPerHour,
};
