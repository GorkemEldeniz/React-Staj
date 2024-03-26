const detectDayOrNight = (sunset: number) => {
	if (new Date().valueOf() / 1000 < sunset) {
		return "day";
	}
	return "night";
};

export { detectDayOrNight };
