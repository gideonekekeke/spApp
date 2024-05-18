import { combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./reducer";

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
	main: mainSlice,
});
