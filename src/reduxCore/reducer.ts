import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	current: {},
};

const reducer = createSlice({
	name: "mobile-sp",
	initialState,
	reducers: {
		storeCurrentUser: (state, { payload }) => {
			state.current = payload;
		},
	},
});

export const { storeCurrentUser } = reducer.actions;

export default reducer.reducer;
