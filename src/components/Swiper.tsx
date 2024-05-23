import React from "react";
import { Text, Dimensions, StyleSheet, View } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import tw from 'twrnc'

const colors = ["tomato", "thistle", "skyblue", "teal"];

const Swiper = () => (
	<View style={styles.container}>
		<SwiperFlatList
			autoplay
			autoplayDelay={2}
			autoplayLoop
			index={2}
			showPagination
			data={colors}
			renderItem={({ item }) => (
				<View style={[styles.child, { backgroundColor: item }]}>
					<Text style={styles.text}>{item}</Text>
				</View>
			)}
		/>
	</View>
);

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "white", height : 150, borderRadius : 10  },
	child: { width, justifyContent: "center",  overflow : 'hidden', fontSize : 10 },
	text: { fontSize: 50, textAlign: "center" },
});

export default Swiper;
