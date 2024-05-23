import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import VideoScreen from "../components/VideoPlayer/ExpovideoPlayer";

const DetailScreen = () => {
	const route = useRoute();
	const { video }: any = route.params;

	useEffect(() => {});

	return (
		<ScrollView style={styles.container}>
			<VideoScreen />

			<View style={styles.infoContainer}>
				<Text style={styles.title}>{video.title}</Text>
				<Text
					style={
						styles.viewsAndDate
					}>{`${video.views} views • ${video.uploadDate}`}</Text>
			</View>

			<Text style={styles.description}>{video.description}</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	videoPlayer: {
		width: "100%",
		height: 200,
		backgroundColor: "black",
	},
	infoContainer: {
		padding: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	viewsAndDate: {
		fontSize: 14,
		color: "gray",
	},

	description: {
		padding: 10,
		fontSize: 14,
		color: "gray",
	},
});

export default DetailScreen;
