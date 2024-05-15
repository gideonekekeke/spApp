import React, { useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import tw from "twrnc";

export default function LoadingButton({ w = "full", loading = false }) {
	return (
		<TouchableOpacity
			onPress={() => {
				// OnRegister();
			}}
			style={tw`p-4 w-${w} mt-4 justify-center rounded-md items-center bg-[#b8b8b8] flex-row text-white `}>
			<ActivityIndicator color='white' />

			{/* <Text style={tw`text-4 font-bold text-white flex `}>Loading...</Text> */}
		</TouchableOpacity>
	);
}
