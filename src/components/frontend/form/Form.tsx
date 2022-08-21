import { FormLayout } from 'components/ui/layouts/form-layout'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export interface IFormInput {
	name: string
	phone: string
	email: string
	address: string
	model: string
	quantity: string
	message: string
	terms: string
	wishDiscount: string
}

const schema = yup.object().shape({
	name: yup.string().required('Ime je obavezno'),
	phone: yup.string().required('Telefon je obavezan'),
	email: yup.string().required('Email je obavezan'),
	address: yup.string().required('Adresa je obavezna'),
	model: yup
		.string()
		.test('is-model-checked', 'Niste odabrali model', value => value !== 'nothingSelect')
		.required(),
	quantity: yup.string().required('Niste odabrali kolicinu'),
	terms: yup.string(),
	wishDiscount: yup.string(),
	message: yup.string()
})

export const Form: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState } = useForm<IFormInput>({
		resolver: yupResolver(schema)
	})
	const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
		console.log(data)
	}

	console.log('test formState', formState)

	return <FormLayout register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} formState={formState} />
}
