import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import WelcomeScreen from "../screens/welcome";
import RegisterScreen from "../screens/register";
import CodeVerification from "../screens/code-verification";
import CreateUserScreen from "../screens/create-user";

export type AuthStackParams = {
	Welcome?: undefined;
	Login: {
		signInMethods: Array<string>;
		email: string;
		title?: string;
		extra?: any;
	};
	Register: any;
	verify: any;
	createuser: any;
};

const StackNav = createNativeStackNavigator<AuthStackParams>();

export /**
 *Auth Stack Navigator for moving between Welcome and Login screen
 *
 * @return {*}
 */
const AuthStackNavigator: React.FC<{}> = () => {
	return (
		<StackNav.Navigator
			screenOptions={{ gestureEnabled: true }}
			initialRouteName='Welcome'>
			<StackNav.Screen
				name='Welcome'
				component={WelcomeScreen}
				options={{ headerShown: false, animationTypeForReplace: "pop" }}
			/>
			<StackNav.Screen
				name='Login'
				component={LoginScreen}
				options={{ headerShown: false }}
			/>

			<StackNav.Screen
				name='Register'
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>

			<StackNav.Screen
				name='verify'
				component={CodeVerification}
				options={{ headerShown: false }}
			/>
			<StackNav.Screen
				name='createuser'
				component={CreateUserScreen}
				options={{ headerShown: false }}
			/>
		</StackNav.Navigator>
	);
};
