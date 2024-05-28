import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import rootReducer from "./reducer"; // Assuming this imports your root reducer
import { RootReducer, rootReducer } from "./rootReducer";
import { SpVideoApi } from "./apislice";

const persistConfig = {
	key: "root-sp",
	version: 0,
	storage: AsyncStorage,
	whitelist: ["main"], // List of reducers to be persisted
	stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<RootReducer>(persistConfig, rootReducer);

export const store = configureStore({
	reducer: { persistedReducer , [SpVideoApi.reducerPath]: SpVideoApi.reducer},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false, // Disable this check because Redux Persist uses non-serializable values
		}).concat(SpVideoApi.middleware)
});

export const persistor = persistStore(store);
