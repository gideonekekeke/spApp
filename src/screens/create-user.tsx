import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { CheckBox } from "native-base";
import React, { useState } from "react";
import tw from "twrnc";
import PhoneNumberInput from "../components/form/phoneinput";
import ShowToast from "../components/Toast";
import { CreateNewUser } from "../utils/ApiCalls";
import { useRoute, useNavigation } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeCurrentUser } from "../reduxCore/reducer";
import { useDispatch } from "react-redux";

export default function CreateUserScreen() {
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const [load, setLoad] = useState(false);
	const [firstname, setFirstname] = useState("");
	const [phone_number, setPhone_number] = useState("");
	const [email, setEmail] = useState("");
	const [surname, setSurname] = useState("");
	const [username, setUsername] = useState("");
	const [isOld, setIsOld] = useState(false);
	const route = useRoute();
	const { data }: any = route.params;
	console.log("now", data);
	const creatingUser = async () => {
		setLoad(true);
		const storedToken = await AsyncStorage.getItem("spMobile");
		console.log("Stored Token:", storedToken);

		try {
			const response: any = await CreateNewUser({
				first_name: firstname,
				surname,
				username: username,
				password,
				referral_code: "",
				phone_number,
				email: data?.username,
				registration_id: data?.id,
				registration_type: data?.type,
			});
			console.log(response);

			if (response?.status === 201) {
				// Store the token in AsyncStorage
				await AsyncStorage.setItem("spMobile", response?.data?.access_token);
				ShowToast(true, "User Created");
				dispatch(storeCurrentUser(response?.data));
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
			ShowToast(false, "An error occurred. Please check again.");
			return err;
		}
	};
	return (
		<SafeAreaView>
			<View style={tw`p-3 mt-7`}>
				<Text style={tw`text-6 font-bold`}>
					Tell Us a Little About Yourself
				</Text>
				<View style={tw`mt-4`}>
					<Text>First Name</Text>
					<TextInput
						onChangeText={setFirstname}
						id='email'
						style={tw` p-4 rounded-md border border-[#ccc] `}
						placeholder=''></TextInput>
				</View>

				<View style={tw`mt-4`}>
					<Text>Last Name</Text>
					<TextInput
						onChangeText={setSurname}
						id='email'
						style={tw` p-4 rounded-md border border-[#ccc] `}
						placeholder=''></TextInput>
				</View>

				<View style={tw`mt-4`}>
					<Text>Phone Number</Text>
					<PhoneNumberInput />
				</View>
				<View style={tw`mt-4`}>
					<Text>Create Password</Text>
					<TextInput
						secureTextEntry={true}
						role='checkbox'
						onChangeText={setPassword}
						id='email'
						style={tw` p-4 rounded-md border border-[#ccc] `}
						placeholder=''></TextInput>
				</View>

				<View style={tw`mt-4 flex-row items-center gap-5`}>
					<CheckBox role='checkbox' />
					<Text>
						By signing up you accept our Terms Of Use and Privacy Policy
					</Text>
				</View>

				<View style={tw`mt-4 flex-row items-center gap-5`}>
					<CheckBox role='checkbox' />
					<Text>Receive newsletters from SignalADoc</Text>
				</View>

				<TouchableOpacity
					onPress={() => {
						creatingUser();
					}}
					style={tw` p-4 w-full mt-4 justify-center items-center bg-[#0F66D2] text-white `}>
					<Text style={tw`text-4 font-bold text-white`}>Create Account</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
