import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { ExploreScreen } from "src/screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeStackNavigator } from "./home-stack";
import Downloads from "../screens/downloads";
import Plans from "../screens/plans";
import SettingsScreen from "../screens/settings";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import HeaderRight from "../components/header/HeaderRight";
import HeaderLeft from "../components/header/HeaderLeft";
import { Feather } from "@expo/vector-icons";
import tw from 'twrnc'

export type BottomTabParams = {
	HomeTab: undefined;
	Explore: undefined;
	Profile: undefined;
	downloads: undefined;
	plans: undefined;
	settings: undefined;
	add : undefined;
};

const Tabs = createBottomTabNavigator<BottomTabParams>();

/*
    Define Icons
*/
interface TabBarIconProps {
	focused: boolean;
	color: string;
	size: number;
}
const HomeIcon = ({ focused, color, size }: TabBarIconProps) => (
	<MaterialCommunityIcons
		name={focused ? "home" : "home-outline"}
		color={color}
		size={26}
	/>
);

const DownloadIcon = ({ focused, color, size }: TabBarIconProps) => (
	<AntDesign
		name={focused ? "clouddownload" : "clouddownloado"}
		size={26}
		color='black'
	/>
);

const PlansIcon = ({ focused, color, size }: TabBarIconProps) => (
	<AntDesign name={focused ? "play" : "playcircleo"} size={24} color='black' />
);

const SettingsIcon = ({ focused, color, size }: TabBarIconProps) => (
	<MaterialCommunityIcons
		name={focused ? "account-settings" : "account-settings-outline"}
		size={26}
		color='black'
	/>
);


const PlusIcon = ({ focused, color, size }: TabBarIconProps) => (
	<Feather  name='plus-circle' size={50} color='black' style = {tw`-top-5 bg-white  pl-3 pr-3 -pt-7 -pb-5 z-50 absolute rounded-md `} />
);

export /**
 *Bottom Tab Navigator, used for Navigating between all bottom tab screens
 *
 * @return {*}
 */
const BottomTabNavigator: React.FC<{}> = () => {
	return (
		<Tabs.Navigator
		
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: true,
				headerTitle: "",
				headerRight: () => <HeaderRight />,
				headerLeft: () => <HeaderLeft />,
			}}>
			<Tabs.Screen
				name='HomeTab'
				component={HomeStackNavigator}
				options={{
					title: "Home",
					headerTitle: "",
					// headerShown: false,
					tabBarIcon: HomeIcon,
				}}
			/>

			<Tabs.Screen
				name='downloads'
				component={Downloads}
				options={{
					title: "downloads",
					headerTitle: "",
					// headerShown: false,
					tabBarIcon: DownloadIcon,
				}}
			/>

			<Tabs.Screen
				name='add'
				component={Downloads}
				options={{
					title: "downloads",
					headerTitle: "",
					// headerShown: false,
					tabBarIcon: PlusIcon,
				}}
			/>

			<Tabs.Screen
				name='plans'
				component={Plans}
				options={{
					title: "plans",
					headerTitle: "",
					// headerShown: false,
					tabBarIcon: PlansIcon,
				}}
			/>
			<Tabs.Screen
				name='settings'
				component={SettingsScreen}
				options={{
					title: "settings",
					headerTitle: "",
					// headerShown: false,
					tabBarIcon: SettingsIcon,
				}}
			/>
		</Tabs.Navigator>
	);
};

// <Tabs.Screen
// name='Explore'
// component={ExploreScreen}
// options={{
// headerTitle: "Explore",
// tabBarIcon: ExploreIcon,
// }}
// />;
