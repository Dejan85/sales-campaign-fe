import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateFormLayout } from 'components/ui/layouts/form-layout/dashboard/update-form'
import { IFormInput, UpdateFormI } from './types'

const schema = yup.object().shape({
	name: yup.string().required('Ime je obavezno'),
	phone: yup.string().required('Telefon je obavezan'),
	email: yup.string().required('Email je obavezan'),
	address: yup.string().required('Adresa je obavezna'),
	quantity: yup.string().required('Niste odabrali kolicinu'),
	terms: yup.string(),
	wishDiscount: yup.string(),
	message: yup.string()
})

export const UpdateForm: React.FC<UpdateFormI> = ({ campaign }): JSX.Element => {
	const { register, handleSubmit, formState } = useForm<IFormInput>({
		resolver: yupResolver(schema)
	})
	const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
		console.log(data)
	}

	return (
		<UpdateFormLayout
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			formState={formState}
			campaign={campaign}
		/>
	)
}
