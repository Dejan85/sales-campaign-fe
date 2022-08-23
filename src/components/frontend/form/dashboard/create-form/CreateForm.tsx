import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateFormI } from './types'
import { CreateFormLayout } from 'components/ui/layouts/form-layout/dashboard/create-form'

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	date: yup.number().required('Date is required').nullable(),
	active: yup.boolean(),
	slug: yup.string().required('Slug is required'),
	therapyAirSmartDiscountPrice: yup.string().required('Therapy Air Smart discount price is required'),
	therapyAiriOnWhiteDiscountPrice: yup.string().required('Therapy Air iOn White discount price is required'),
	therapyAiriOnBlackDiscountPrice: yup.string().required('Therapy Air iOn Black discount price is required'),

	therapyAirSmartPrice: yup.string().required('Therapy Air Smart price is required'),
	therapyAiriOnWhite: yup.string().required('Therapy Air iOn White price is required'),
	therapyAiriOnBlack: yup.string().required('Therapy Air iOn Black price is required')
})

export const CreateForm: React.FC = (): JSX.Element => {
	const { register, handleSubmit, formState, setValue } = useForm<CreateFormI>({
		resolver: yupResolver(schema)
	})
	const onSubmit: SubmitHandler<CreateFormI> = (data, e) => {
		console.log(data)
	}

	return (
		<CreateFormLayout
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			formState={formState}
			setValue={setValue}
		/>
	)
}
