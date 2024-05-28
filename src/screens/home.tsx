import { View, Text, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ButtonCategory from "../components/reuse/button-category";
import tw from "twrnc";
import Swiper from "../components/Swiper";
import YouTubeCard from "../components/VideoCard";
import SkeletonYouTubeCard from "../components/skeletons/Video-card-skeleton";
import {
	useGetVideosQuery,
	useViewCartegoriesQuery,
} from "../reduxCore/apislice";
import EmptyData from "../components/EmptyData";
export default function HomeScreen() {
	const buttonsData = Array(10).fill(0);
	const [refreshing, setRefreshing] = useState(false);
	const [selectedBtn, setSelectedBtn] = useState("All");
	const { data: catData } = useViewCartegoriesQuery({});
	const [catId, setCatId] = useState<any>();

	// console.log('this is categpo', catData);

	const { data, isLoading, isFetching } = useGetVideosQuery({
		language_id: 1,
		video_category_id: selectedBtn === "All" ? "" : catId,
		search_text: "",
	});

	const changeSelected = (item: string) => {
		setSelectedBtn(item);
	};

	// console.log("alll vieos", data);

	const fetchData = useCallback(async () => {
		// Simulate an API call to fetch data
		setRefreshing(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate
		} catch (error) {
			console.error("Failed to fetch data", error);
		} finally {
			setRefreshing(false);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<View style={tw`p-3`}>
			<View style={tw`flex-row`}>
				{/* <ButtonCategory /> */}
				<FlatList
					ListHeaderComponent={
						<ButtonCategory
							title='All'
							setSelectedBtn={changeSelected}
							selectedBtn={selectedBtn}
							setCatId={setCatId}
							item={""}
						/>
					}
					data={catData?.data}
					renderItem={({ item }) => (
						<View style={tw`flex-row gap-3 pr-1 mb-3 ml-3`}>
							<ButtonCategory
								title={item?.name}
								setSelectedBtn={changeSelected}
								selectedBtn={selectedBtn}
								setCatId={setCatId}
								item={item}
							/>
						</View>
					)}
					keyExtractor={(item, index) => index.toString()}
					horizontal={true}
				/>
			</View>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Swiper />
				<View style={tw`flex-1 p-3`}>
					{data?.data?.length >= 1 ? (
						<FlatList
							data={data.data}
							renderItem={({ item }) => <YouTubeCard video={item} />}
							keyExtractor={(item) => item.id}
							showsVerticalScrollIndicator={true}
							refreshControl={
								<RefreshControl
									refreshing={isLoading || isFetching}
									onRefresh={fetchData}
								/>
							}
						/>
					) : (
						<EmptyData />
					)}
				</View>
			</ScrollView>
		</View>
	);
}
