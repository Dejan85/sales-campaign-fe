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
}

const schema = yup.object().shape({
	name: yup.string().required('Ime je obavezno'),
	phone: yup.string().required('Telefon je obavezan'),
	email: yup.string().required('Email je obavezan'),
	address: yup.string().required('Adresa je obavezna'),
	model: yup.string().required('Niste odabrali model'),
	quantity: yup.string().required('Niste odabrali kolicinu'),
	message: yup.string()
})

export const Form: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors, dirtyFields }
	} = useForm<IFormInput>({
		resolver: yupResolver(schema)
	})
	const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
		console.log(data)
		console.log('test dirtyFields', dirtyFields)
	}

	return <FormLayout register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} />
}
