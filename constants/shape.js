import * as Yup from "yup"
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
const mobileNumberRegex = /^(09|\+639)\d{9}$/
export const shape = {
	firstName: Yup.string()
		.required("is required")
		.matches(nameRegex, "is not valid"),
	lastName: Yup.string()
		.required("is required")
		.matches(nameRegex, "is not valid"),
	mobileNumber: Yup.string()
		.required("is required")
		.matches(mobileNumberRegex, "is not valid"),

	email: Yup.string().email("is invalid").required("is required")
}
