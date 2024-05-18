import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";

export default function HeaderRight() {
	return (
		<View style={tw`mr-3 flex-row gap-4`}>
			<MaterialIcons name='notifications' size={24} color='black' />
			<View style={tw`h-7 w-7 rounded-full bg-gray-300`}></View>
		</View>
	);
}
