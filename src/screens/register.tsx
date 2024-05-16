import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import {
	Container,
	Content,
	Form,
	Header,
	Input,
	Item,
	Label,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RegisterUser } from "../utils/ApiCalls";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OverlayComponent from "../components/Modal";

import { useNavigation, Link } from "@react-navigation/native";
import ShowToast from "../components/Toast";
import LoadingButton from "../components/LoadingButton";
import PhoneNumberInput from "../components/form/phoneinput";
export default function RegisterScreen() {
	const [type, settype] = useState("email");
	const [userName, setUserName] = useState("");
	const [load, setLoad] = useState(false);

	const navigation = useNavigation<any>();

	const [openModal, setOpenModal] = useState(false);

	const storeData = async (value: any) => {
		try {
			await AsyncStorage.setItem("spMobile", value);
		} catch (e) {
			// saving error
		}
	};

	// console.log("this is it", userName);

	const OnRegister = async () => {
		setLoad(true);

		try {
			const response: any = await RegisterUser({
				username: userName,
				type: type,
			});
			console.log("this is response", response);

			if (response?.data?.success) {
				navigation.navigate("verify", {
					data: { ...response?.data },
				});

				ShowToast(true, response?.data?.message);
			} else {
				ShowToast(false, response?.response?.data?.username[0]);
			}
			// setLoad(false);
			// console.log(response);
		} catch (err: any) {
			if (err?.response?.status === 403) {
				ShowToast(true, "User already exists. Login instead.");
				console.log("gyyiyiy", err);
			} else {
				ShowToast(false, "User already exists. Login instead.");
			}
			setLoad(false);
		}
	};

	return (
		<SafeAreaView>
			<View style={tw`p-3 mt-7`}>
				<Text style={tw`text-6 font-bold`}>
					Your Journey to a Healthier You Starts Here
				</Text>

				{type === "email" && (
					<View style={tw`mt-4`}>
						<Text>Email Address</Text>
						<TextInput
							onChangeText={setUserName}
							id='email'
							style={tw` p-4 rounded-md border border-[#ccc] `}
							placeholder='Enter your email'></TextInput>
					</View>
				)}

				{type === "phone" && (
					<View style={tw`mt-4`}>
						<Text>Phone Number</Text>
						<PhoneNumberInput />
					</View>
				)}

				{load ? (
					<LoadingButton />
				) : (
					<TouchableOpacity
						onPress={() => {
							OnRegister();
						}}
						style={tw` p-4 w-full mt-4 justify-center items-center bg-[#0F66D2] text-white `}>
						<Text style={tw`text-4 font-bold text-white`}>Continue</Text>
					</TouchableOpacity>
				)}

				<Text
					style={tw`flex-row justify-center w-full text-5 items-center text-center mt-7 font-bold`}>
					OR
				</Text>

				<View style={tw`mt-4`}>
					{type === "email" && (
						<TouchableOpacity
							onPress={() => {
								settype("phone");
								console.log("yoooo");
							}}
							style={tw`p-4 w-full  justify-center items-center border border-[#0F66D2]`}>
							<Text
								style={tw`text-4 font-bold flex items-center justify-center`}>
								<Text style={tw`hidden`}>
									<Feather name='phone' size={20} color='black' />
								</Text>
								<Text style={tw`pl-2`}>Signup with phone number</Text>
							</Text>
						</TouchableOpacity>
					)}

					{type === "phone" && (
						<TouchableOpacity
							onPress={() => {
								settype("email");
							}}
							style={tw`p-4 w-full  justify-center items-center border border-[#0F66D2]`}>
							<Text
								style={tw`text-4 font-bold flex items-center justify-center`}>
								<Text style={tw`hidden`}>
									<AntDesign name='mail' size={20} color='black' />
								</Text>
								<Text style={tw`pl-2`}>Signup with Email</Text>
							</Text>
						</TouchableOpacity>
					)}

					<TouchableOpacity
						// onPress={() => {
						// navigation.navigate("Register");
						// }}
						style={tw`p-4 w-full mt-4 justify-center items-center border border-[#0F66D2]`}>
						<Text style={tw`text-4 font-bold flex items-center justify-center`}>
							<Text style={tw`hidden`}>
								<AntDesign name='google' size={20} color='red' />
							</Text>
							<Text style={tw`pl-2`}>Signup with Google</Text>
						</Text>
					</TouchableOpacity>
				</View>
				<Text
					style={tw`flex-row text-[#0F66D2] justify-center w-full text-4 items-center text-center mt-7 font-bold`}>
					Already have an account?{" "}
					<Text
						onPress={() => {
							navigation.navigate("Login");
						}}
						style={tw`underline`}>
						Log In
					</Text>
				</Text>
			</View>
		</SafeAreaView>
	);
}
