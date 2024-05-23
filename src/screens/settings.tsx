import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';

const SettingsScreen = () => {
	const [username, setUsername] = useState("JohnDoe");
	const [email, setEmail] = useState("john.doe@example.com");
	const [password, setPassword] = useState("");
	const [avatar, setAvatar] = useState(
		"https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
	);

	const handleSaveProfile = () => {
		// Handle save action here, e.g., API call to update user info
		Alert.alert("Success", "Profile settings have been updated");
	};

	const handleSavePassword = () => {
		// Handle password change here, e.g., API call to update password
		Alert.alert("Success", "Password has been changed");
	};

	const pickImage = async () => {
		// let result = await ImagePicker.launchImageLibraryAsync({
			// mediaTypes: ImagePicker.MediaTypeOptions.All,
			// allowsEditing: true,
			// aspect: [4, 4],
			// quality: 1,
		// });

		// if (!result.cancelled) {
			// setAvatar(result.uri);
		// }
	};

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={tw`flex-1 p-4 bg-white`}>
			<Text style={tw`text-2xl font-bold mb-4`}>Account Settings</Text>

			<View style={tw`mb-6`}>
				<Text style={tw`text-lg mb-2`}>Change Avatar</Text>
				<TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
					{avatar ? (
						<Image source={{ uri: avatar }} style={styles.avatar} />
					) : (
						<Text style={tw`text-gray-500`}>Tap to select an avatar</Text>
					)}
				</TouchableOpacity>
			</View>

			<View style={tw`mb-6`}>
				<Text style={tw`text-lg mb-2 font-bold`}>Profile Information</Text>
				<Text style={tw`text-lg mb-1`}>Username</Text>
				<TextInput
					style={styles.input}
					value={username}
					onChangeText={setUsername}
				/>
				<Text style={tw`text-lg mb-1 mt-3`}>Email</Text>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={setEmail}
					keyboardType='email-address'
				/>
				<TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
					<Text style={styles.saveButtonText}>Save Profile</Text>
				</TouchableOpacity>
			</View>

			<View style={tw`mb-6`}>
				<Text style={tw`text-lg mb-2 font-bold`}>Change Password</Text>
				<Text style={tw`text-lg mb-1`}>Current Password</Text>
				<TextInput
					style={styles.input}
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<Text style={tw`text-lg mb-1`}>New Password</Text>
				<TextInput
					style={styles.input}
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>
				<TouchableOpacity
					style={styles.saveButton}
					onPress={handleSavePassword}>
					<Text style={styles.saveButtonText}>Save Password</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default SettingsScreen;
