import { AuthInstance } from "./AxiosConfig";

export const RegisterUser = async (data: any) => {
	try {
		const response = await AuthInstance.post("/video/user/auth/register", data);

		return response;
	} catch (err) {
		return err;
	}
};

export const CreateNewUser = async (data: any) => {
	try {
		const response = await AuthInstance.post(
			"/video/user/auth/register/create",
			data,
		);
		return response;
	} catch (err) {
		return err;
	}
};


export const LoginUser = async (data:any) => {
	try {
		const response = await AuthInstance.post("/app/user/auth/login", data);
		return response;
	} catch (err) {
		return err;
	}
};