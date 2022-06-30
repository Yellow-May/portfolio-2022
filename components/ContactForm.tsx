import { FC } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useForm } from '@formspree/react';
import * as Yup from 'yup';
import FormInput from './FormInput';
import { Send } from 'react-feather';

type InputItemsType = {
	type: 'text' | 'email' | 'textarea';
	name: string;
	labelTxt: string;
};

const inputItems: InputItemsType[] = [
	{
		type: 'email',
		name: 'email',
		labelTxt: 'E-mail',
	},
	{
		type: 'text',
		name: 'subject',
		labelTxt: 'Subject',
	},
	{
		type: 'textarea',
		name: 'message',
		labelTxt: 'Message',
	},
];

const ContactForm: FC = () => {
	const [formstate, handleSubmit] = useForm('xdopblag');

	const formik = useFormik({
		initialValues: {
			email: '',
			subject: '',
			message: '',
		},
		onSubmit: (e, values) => {
			handleSubmit(e);
			values.resetForm();
			if (formstate.succeeded) toast.success('Thank you for reaching out');
			else toast.error('There was an error, Please try again');
		},
		validationSchema: Yup.object({
			email: Yup.string().email('invalid email address').required('required!'),
			subject: Yup.string().required('required!'),
			message: Yup.string().required('required!'),
		}),
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			{inputItems.map(({ type, name, labelTxt }) => (
				<FormInput key={name} {...{ type, name, labelTxt, formik }} />
			))}

			<button
				title='Send Message'
				type='submit'
				disabled={formstate.submitting}>
				<span>Send</span>
				<Send />
			</button>
		</form>
	);
};

export default ContactForm;
