import { OrdersFormLayout } from 'components/ui/layouts/form-layout/orders'
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { createOrder } from 'api/methods'
import { OrdersI } from 'queries/orders/types'
import { useRouter } from 'next/router'

const schema = yup.object().shape({
	name: yup.string().required('Ime je obavezno'),
	phone: yup.string().required('Telefon je obavezan'),
	email: yup.string().required('Email je obavezan'),
	address: yup.string().required('Adresa je obavezna'),
	// model: yup
	// 	.string()
	// 	.test('is-model-checked', 'Niste odabrali model', value => value !== 'nothingSelect')
	// 	.required(),
	quantity: yup.string().required('Niste odabrali kolicinu'),
	terms: yup.string(),
	wishDiscount: yup.string(),
	message: yup.string(),
	model: yup.string().required('Model je obavezan')
})

export const OrdersForm: React.FC = (): JSX.Element => {
	const { push, query } = useRouter()
	const { register, handleSubmit, formState, setValue } = useForm<OrdersI>({
		resolver: yupResolver(schema)
	})
	const slug = query.slugs as string[]

	useEffect(() => {
		setValue('model', slug && slug[1])
	}, [slug])

	const onSubmit: SubmitHandler<OrdersI> = async (data, e) => {
		try {
			await createOrder(data)
			push(`/${slug[0]}`)
		} catch (error) {
			console.log('test create order error', error)
		}
	}

	return <OrdersFormLayout register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} formState={formState} />
}
