import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const PhoneNumberInput = () => {
	const [countryCode, setCountryCode] = useState("NG");
	const [phoneNumber, setPhoneNumber] = useState("");

	const onSelectCountry = (country:any) => {
		setCountryCode(country.cca2);
	};

	return (
		<View style={styles.container}>
			<CountryPicker
				onSelect={onSelectCountry}
				countryCode={countryCode}
				withFilter={true}
				withFlagButton={true}
				withCountryNameButton={true}
				withAlphaFilter={true}
				withCallingCode={true}
				withEmoji={true}
				containerButtonStyle={styles.countryPicker}
			/>
			<TextInput
				style={styles.input}
				placeholder='Enter phone number'
				onChangeText={(text) => setPhoneNumber(text)}
				value={phoneNumber}
				keyboardType='phone-pad'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "#ccc",
		paddingHorizontal: 10,
	},
	countryPicker: {
		height: 50,
		justifyContent: "center",
	},
	input: {
		flex: 1,
		height: 50,
		paddingLeft: 10,
	},
});

export default PhoneNumberInput;
