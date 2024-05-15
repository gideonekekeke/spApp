import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import LoadingButton from "../components/LoadingButton";
import ShowToast from "../components/Toast";
export default function CodeVerification() {
	const route = useRoute();
	const { data }: any = route.params;
	console.log("rghjfjg", data);
	const [code, setCode] = useState("");
	const navigation = useNavigation<any>();

	const VerifyCode = () => {
		if (code !== data?.data?.code) {
			ShowToast(false, "Invalid Code... Please check again");
		} else {
			navigation.navigate("createuser", {
				data: { ...data?.data },
			});
			ShowToast(true, "Valid Code");
			// window.location.href = "/create-user";
		}
	};

	return (
		<SafeAreaView>
			<View style={tw`mt-10 p-3`}>
				<Text style={tw`text-6 font-bold`}>
					We sent a verification Code to {data?.data?.username}
				</Text>
				<View style={tw`mt-4`}>
					<Text>Enter verification Code </Text>
					<TextInput
						onChangeText={setCode}
						id='email'
						style={tw`border p-4 rounded-md border-[#ccc]`}
						placeholder='verification code'></TextInput>
				</View>
				<Text style={tw`text-4 mt-5`}>
					Didn't recieve it? <Text style={tw`underline`}>Resend</Text>
				</Text>
				<TouchableOpacity
					onPress={() => {
						VerifyCode();
					}}
					style={tw` p-4 w-70 mt-4 justify-center rounded-md items-center bg-[#0F66D2] text-white `}>
					<Text style={tw`text-4 font-bold text-white`}>Verify</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
