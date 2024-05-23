import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function ButtonCategory() {
  return (
		<TouchableOpacity
			onPress={() => {
				// creatingUser();
			}}
			style={tw` p-3  rounded-md justify-center items-center bg-[#0F66D2] text-white 
`}>
			<Text style={tw`text-3 font-bold text-white`}>Create Account</Text>
		</TouchableOpacity>
	);
}