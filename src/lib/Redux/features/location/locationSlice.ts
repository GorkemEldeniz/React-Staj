import type { Root as WeatherState } from "@/pages/Home/Weather/type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface RootState {
	weather?: WeatherState;
}

const initialState: RootState = {
	weather: undefined,
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		setWeather: (state, action: PayloadAction<WeatherState | undefined>) => {
			state.weather = action.payload;
			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
