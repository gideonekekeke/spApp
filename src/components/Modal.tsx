import React, { useEffect, useState } from "react";
import { Button, Overlay, Icon } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";

type OverlayComponentProps = {
	title?: string;
	description?: string;
};

const OverlayComponent: React.FunctionComponent<any> = (props) => {
	const [visible, setVisible] = useState(props?.open);

	console.log("this is propsvbn", props);

	const toggleOverlay = () => {
		setVisible(!visible);
	};

    useEffect(()=>{

    }, [props?.open])

	return (
		<View>
			<Overlay
				style={tw`hidden`}
				isVisible={props?.open}
				onBackdropPress={toggleOverlay}>
				<Text style={styles.textPrimary}>Hello!</Text>
				<Text style={styles.textSecondary}>
					Welcome to React Native Elements and other styled compos
				</Text>
				<Button
					icon={
						<Icon
							name='wrench'
							type='font-awesome'
							color='white'
							size={25}
							iconStyle={{ marginRight: 10 }}
						/>
					}
					title='Start Building'
					onPress={toggleOverlay}
				/>
			</Overlay>
		</View>
	);
};

// <Button
// title='Open Overlay'
// onPress={toggleOverlay}
// buttonStyle={styles.button}
// />;

const styles = StyleSheet.create({
	button: {
		margin: 10,
	},
	textPrimary: {
		marginVertical: 20,
		textAlign: "center",
		fontSize: 20,
	},
	textSecondary: {
		marginBottom: 10,
		textAlign: "center",
		fontSize: 17,
	},
});

export default OverlayComponent;
