import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ButtonCategory from "../components/reuse/button-category";
import tw from "twrnc";
import Swiper from "../components/Swiper";
import YouTubeCard from "../components/VideoCard";
import SkeletonYouTubeCard from "../components/skeletons/Video-card-skeleton";
export default function HomeScreen() {
	const buttonsData = Array(10).fill(0);
	 const [refreshing, setRefreshing] = useState(false);

		const fetchData = useCallback(async () => {
			// Simulate an API call to fetch data
			setRefreshing(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
				const newVideos = [
					// Simulated new data
					{ id: "1", title: "Video 1", description: "Description 1" },
					{ id: "2", title: "Video 2", description: "Description 2" },
					// Add more video objects as needed
				];
				// setVideos(newVideos);
			} catch (error) {
				console.error("Failed to fetch data", error);
			} finally {
				setRefreshing(false);
			}
		}, []);

		useEffect(() => {
			fetchData();
		}, [fetchData]);
  const videos = [
		{
			id: "1",
			title: "React Native Tutorial for Beginners",
			thumbnail: "https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
			channelName: "Programming with Mosh",
			channelAvatar: "https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
			views: "1M",
			uploadDate: "1 week ago",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		},
		{
			id: "2",
			title: "Learn React Native in 2021",
			thumbnail: "https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
			channelName: "Academind",
			channelAvatar: "https://i.ytimg.com/vi/0-S5a0eXPoc/maxresdefault.jpg",
			views: "500K",
			uploadDate: "2 days ago",
			description:
				"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		},
		// Add more video objects here...
	];

	return (
		<View style={tw`p-3`}>
			<FlatList
				data={buttonsData}
				renderItem={({ item }) => (
					<View style={tw`flex-row gap-3 pr-2 mb-3`}>
						<ButtonCategory />
					</View>
				)}
				keyExtractor={(item, index) => index.toString()}
				horizontal={true}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Swiper />
				<View style={tw`flex-1 p-3`}>
					<FlatList
						data={videos}
						// renderItem={({ item }) => <SkeletonYouTubeCard/>}
						renderItem={({ item }) => <YouTubeCard video={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={true}
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={fetchData} />
						}
					/>
				</View>
			</ScrollView>
		</View>
	);
}
