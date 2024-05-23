import React from "react";
import { View, StyleSheet } from "react-native";


const SkeletonYouTubeCard = () => {
	return (
		<View style={styles.card}>
			<View style={styles.thumbnail} />
			<View style={styles.infoContainer}>
				<View style={styles.textContainer}>
					<View style={styles.title} />
					<View style={styles.channelName} />
					<View style={styles.viewsAndDate} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		marginBottom: 20,
		marginTop: 10,
	},
	thumbnail: {
		width: "100%",
		height: 200,
		backgroundColor: "#e0e0e0",
		borderRadius: 10,
	},
	infoContainer: {
		flexDirection: "row",
		paddingTop: 10,
		paddingBottom: 10,
	},
	channelAvatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: "#e0e0e0",
	},
	textContainer: {
		marginLeft: 10,
		flex: 1,
	},
	title: {
		width: "80%",
		height: 20,
		backgroundColor: "#e0e0e0",
		borderRadius: 4,
		marginBottom: 4,
	},
	channelName: {
		width: "60%",
		height: 20,
		backgroundColor: "#e0e0e0",
		borderRadius: 4,
		marginBottom: 4,
	},
	viewsAndDate: {
		width: "40%",
		height: 20,
		backgroundColor: "#e0e0e0",
		borderRadius: 4,
	},
});

export default SkeletonYouTubeCard;
