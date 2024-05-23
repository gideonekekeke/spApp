import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const YouTubeCard = ({ video }: any) => {
     const navigation = useNavigation<any>();
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("DetailScreen", { video })}>
			<View style={styles.card}>
				<Image source={{ uri: video.thumbnail }} style={styles.thumbnail} />
				<View style={styles.infoContainer}>
					<View style={styles.textContainer}>
						<Text style={styles.title} numberOfLines={2}>
							{video.title}
						</Text>
						<Text style={styles.channelName}>{video.channelName}</Text>
						<Text
							style={
								styles.viewsAndDate
							}>{`${video.views} views • ${video.uploadDate}`}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
        marginTop : 10
	},
	thumbnail: {
		width: "100%",
		height: 200,
		borderRadius: 5,
	},
	infoContainer: {
		flexDirection: "row",
		paddingBottom: 10,
		paddingTop: 10,
	},
	channelAvatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	textContainer: {
		marginLeft: 10,
		flex: 1,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000",
	},
	channelName: {
		fontSize: 14,
		color: "#606060",
		marginTop: 4,
	},
	viewsAndDate: {
		fontSize: 12,
		color: "#606060",
		marginTop: 2,
	},
});

export default YouTubeCard;
