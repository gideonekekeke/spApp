// EmptyData.js
import React from "react";
import { View, Image, Text } from "react-native";
import tw from "twrnc";

const EmptyData = () => {
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Image
				source={require("../../assets/empt.png")}
				style={tw`w-50 h-50 mb-4`} 
				resizeMode='contain'
			/>
			<Text style={tw`text-lg text-gray-500`}>No data found</Text>
		</View>
	);
};

export default EmptyData;
