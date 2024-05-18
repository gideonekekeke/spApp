import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

export default function HeaderLeft() {
	return (
		<View style={tw`ml-3  `}>
			<Text style = {tw`font-bold`}>SpMobile</Text>
		</View>
	);
}
