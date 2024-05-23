import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { PixelRatio, StyleSheet, View, Button } from "react-native";
import tw from 'twrnc'
import { getWindowWidth } from "../../helpers/constants";

const videoSource =
	"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function VideoScreen() {
	const ref = useRef(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const player = useVideoPlayer(videoSource, (player) => {
		player.loop = true;
		player.play();
	});

	useEffect(() => {
		const subscription = player.addListener("playingChange", (isPlaying) => {
			setIsPlaying(isPlaying);
		});

		return () => {
			subscription.remove();
		};
	}, [player]);

	return (
		<View style={styles.contentContainer}>
			<VideoView
				ref={ref}
				style={styles.video}
				player={player}
				allowsFullscreen
				allowsPictureInPicture
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		padding: 0,
        overflow : 'hidden',
        backgroundColor : 'silver'
		// alignItems: "center",
		// justifyContent: "center",
		// paddingHorizontal: 50,
	},
	video: {
		width: '100%',
		height: 275,
        flex : 1
	},
	controlsContainer: {
		padding: 0,
	},
});
