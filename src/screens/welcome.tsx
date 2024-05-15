import {
	View,
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

import tw from "twrnc";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParams } from "../navigations/auth-stack";
import { useNavigation, Link } from "@react-navigation/native";
// import pic from "../assets/splash.png";

type WelcomeScreenParams = StackNavigationProp<AuthStackParams, "Welcome">;

export default function WelcomeScreen() {
	const navigation = useNavigation<WelcomeScreenParams>();
	return (
		<View>
			{/* <Image src='../assets/log.png' /> */}

			<View
				style={tw`bg-[#0F66D2] p-2 h-full text-white justify-center items-center`}>
				<Text style={tw`text-white text-[11] font-extrabold text-center`}>
					Transform Your Well-Being
				</Text>
				<Text style={tw`text-white text-center mt-2 mb-10 text-5`}>
					Your journey to a healthier you starts here. Start watching, gain
					knowledge, and thrive.
				</Text>

				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Register");
					}}
					style={tw`bg-white p-4 w-70 justify-center items-center`}>
					<Text style={tw`text-4 font-bold`}>Get Started</Text>
				</TouchableOpacity>
				<Link style={tw`text-white mt-3 text-4 font-bold`} to={'/Login'}>
				<Text>Login</Text>
				</Link>
			</View>
		</View>
	);
}
