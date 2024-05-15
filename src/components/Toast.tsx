import { Toast } from "toastify-react-native";

const ShowToast = (isSuccess: boolean, value: string) => {
	if (isSuccess) {
		Toast.success(value);
	} else {
		Toast.error(value, "");
	}
};

export default ShowToast;


