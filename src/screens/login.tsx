import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import LoadingButton from "../components/LoadingButton";
import { LoginUser } from "../utils/ApiCalls";
import ShowToast from "../components/Toast";
import { AntDesign } from "@expo/vector-icons";

export default function LoginScreen() {
	const [load, setLoad] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = async () => {
		setLoad(true);
		try {
			const response: any = await LoginUser({
				username: email,
				password,
			});
			console.log("response", response);
			if (response?.status === 200) {
				// const decoded = jwtDecode(response?.data.access_token);
				ShowToast(true, "Login Successfull");
				// cookies.set("signaladoc_production", response?.data?.access_token, {
				// expires: new Date(decoded.exp! * 1000),
				// });
				setLoad(false);
				// dispatch(StoreCurrentUser(response?.data));
			} else if (response?.response?.data?.error) {
				ShowToast(false, ` ${response?.response?.data?.error}`);
				setLoad(false);
			} else {
				Object.entries(response?.response?.data).forEach(
					([, errorMessages]: any) => {
						const firstErrorMessage = errorMessages[0];
						ShowToast(false, ` ${firstErrorMessage}`);
					},
				);
				setLoad(false);
			}
		} catch (err) {
			setLoad(false);
			ShowToast(false, "An error occurred during Login. Please try again.");
		}

		// login({ email, password });
	};
	return (
		<SafeAreaView>
			<View style={tw`p-3 mt-7`}>
				<Text style={tw`text-6 font-bold `}>Welcome Back! Please Log In</Text>
				<View style={tw`mt-4`}>
					<Text>Email Address or Phone Number</Text>
					<TextInput
						onChangeText={setEmail}
						id='email'
						style={tw` p-4 rounded-md border border-[#ccc] `}
						placeholder='Enter your email'></TextInput>
				</View>

				<View style={tw`mt-4`}>
					<Text>Password</Text>
					<TextInput
						secureTextEntry={true}
						onChangeText={setPassword}
						id='email'
						style={tw` p-4 rounded-md border border-[#ccc] `}
						placeholder='Enter your password'></TextInput>
				</View>
				<Text
					style={tw`flex-row justify-end w-full mt-1 text-4 items-end text-right`}>
					Forgot Password?
				</Text>

				{load ? (
					<LoadingButton />
				) : (
					<TouchableOpacity
						onPress={() => {
							handleLogin();
						}}
						style={tw` p-4 w-full mt-4 justify-center items-center bg-[#0F66D2] text-white `}>
						<Text style={tw`text-4 font-bold text-white`}>Log In</Text>
					</TouchableOpacity>
				)}

				<Text
					style={tw`flex-row justify-center w-full text-5 items-center text-center mt-7 font-bold`}>
					OR
				</Text>

				<TouchableOpacity
					// onPress={() => {
					// navigation.navigate("Register");
					// }}
					style={tw`p-4 w-full mt-4 justify-center items-center border border-
[#0F66D2]`}>
					<Text style={tw`text-4 font-bold flex items-center justify-center`}>
						<Text style={tw`hidden`}>
							<AntDesign name='google' size={20} color='red' />
						</Text>
						<Text style={tw`pl-2`}>LogIn with Google</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
