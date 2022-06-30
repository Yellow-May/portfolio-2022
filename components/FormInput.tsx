import { FormikValues } from 'formik';
import { FC } from 'react';

interface InputProps {
	type: 'text' | 'email' | 'textarea';
	name: string;
	labelTxt: string;
	formik: FormikValues;
}

const FormInput: FC<InputProps> = ({ type, name, labelTxt, formik }) => {
	let errorMsg = formik.errors[name];
	let touched = formik.touched[name];

	let error = errorMsg ? errorMsg.length !== 0 && touched : false;

	return (
		<div className='form-input'>
			<label htmlFor={name}>{labelTxt}</label>

			{type === 'textarea' ? (
				<textarea name={name} id={name} {...formik.getFieldProps(name)} />
			) : (
				<input
					type={type}
					name={name}
					id={name}
					{...formik.getFieldProps(name)}
				/>
			)}

			{error && <span className='error-message'>{errorMsg}</span>}
		</div>
	);
};

export default FormInput;
