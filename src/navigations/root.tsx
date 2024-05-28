import React from "react";
import { ColorSchemeName, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { navigationLightTheme, navigationDarkTheme } from "src/constants/theme";
// import { useAppSelector } from "src/ducks/useful-hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigator } from "./auth-stack";
import ToastManager, { Toast } from "toastify-react-native";
import { Provider, useSelector } from "react-redux";
import { persistor, store } from "../reduxCore/store";
import { PersistGate } from "redux-persist/integration/react";
import { BottomTabNavigator } from "./bottom-tab";

// import { BottomTabNavigator } from "./bottom-tab";

export interface RootParams {
	scheme?: ColorSchemeName; // the color scheme of the app
}

export type RootStackParams = {
	Main: undefined;
};

const StackNav = createNativeStackNavigator<RootStackParams>();

export /**
 * Root Navigator for navigating to Bottom Tab Navigator if signed in and Auth Stack if signed out
 *
 * @param {*} { scheme }
 * @return {*}
 */
const RootNavigator: React.FC<RootParams> = ({ scheme }) => {
	// redux handlers
	// const loggedIn = useAppSelector((state) => state.user.loggedIn);
	const user = useSelector((state: any) => state?.persistedReducer?.main?.current);

	// console.log('userrtgyhujk', user);

	return (
		<NavigationContainer
		// theme={scheme === "dark" ? navigationDarkTheme : navigationLightTheme}
		>
			<ToastManager />
			<StackNav.Navigator>
				<StackNav.Screen
					name='Main'
					component={
						user?.access_token ? BottomTabNavigator : AuthStackNavigator
					}
					// component={AuthStackNavigator}
					options={{ headerShown: false }}
				/>
			</StackNav.Navigator>
		</NavigationContainer>
	);
};

RootNavigator.defaultProps = {
	scheme: "light",
};
