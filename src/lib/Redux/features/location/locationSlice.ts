import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface LocationState {
	name: string;
	lat: number;
	lon: number;
	country: string;
	state: string;
}

const initialState: Partial<LocationState> = {
	name: undefined,
};

export const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		setLocation: (state, action: PayloadAction<LocationState>) => {
			state = action.payload;
			return state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
