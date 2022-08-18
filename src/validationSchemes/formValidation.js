import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
	name: Yup.string()
		.max(15, 'Oh, You have such a big name')
		.required('Required'),
	lastname: Yup.string()
		.max(20, 'Must be less than 20 symbols')
		.required('Required'),
	phone: Yup.string()
		.min(11, 'Must be 11 numbers')
		.max(11, 'Don\'t use +')
		.required('Required')
});
export default loginFormSchema;