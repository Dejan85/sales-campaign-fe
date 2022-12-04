import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateFormI } from './types'
import { CreateFormLayout } from 'components/ui/layouts/form-layout/dashboard/create-form'
import { createCampaign } from 'api/methods'
import { CampaignsQueryKeys } from 'queries/campaigns/useCampaignsQuery'
import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'

export const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	expireDate: yup.number().required('Expire Date is required').nullable(),
	activity: yup.boolean(),
	slug: yup.string().required('Slug is required'),
	totalNumberOfReservations: yup.string().required('Total number of reservations is required'),
	currentDiscountLevel: yup.string().required('Current discount level is required'),
	validReservationsRequired: yup.string().required('Valid reservations required is required'),
	nextLevelOfDiscount: yup.string().required('Next level of discount is required'),

	airSmartPrice: yup.string().required('Therapy Air Smart price is required'),
	airSmartDiscountPrice: yup.string().required('Therapy Air Smart discount price is required'),
	airSmartDiscountPercent: yup.string().required('Therapy Air Smart discount is required'),
	airSmartDevicesInStock: yup.string().required('Therapy Air Smart devices in stock is required'),
	airSmartTotalNumberOfReservations: yup.string().required('Total number of reservations is required'),

	airiOnWhitePrice: yup.string().required('Therapy air iOn white price is required'),
	airiOnWhiteDiscountPrice: yup.string().required('Therapy air iOn white discount price is required'),
	airiOnWhiteDiscountPercent: yup.string().required('Therapy air iOn white discount is required'),
	airiOnWhiteDevicesInStock: yup.string().required('Therapy air iOn white devices in stock is required'),
	airiOnWhiteTotalNumberOfReservations: yup.string().required('Total number of reservations is required'),

	airiOnBlackPrice: yup.string().required('Therapy air iOn Black price is required'),
	airiOnBlackDiscountPrice: yup.string().required('Therapy air iOn Black discount price is required'),
	airiOnBlackDiscountPercent: yup.string().required('Therapy air iOn Black discount is required'),
	airiOnBlackDevicesInStock: yup.string().required('Therapy air iOn Black devices in stock is required'),
	airiOnBlackTotalNumberOfReservations: yup.string().required('Total number of reservations is required')
})

export const CreateForm: React.FC = (): JSX.Element => {
	const queryClient = useQueryClient()
	const { push } = useRouter()

	const { register, handleSubmit, formState, setValue } = useForm<CreateFormI>({
		resolver: yupResolver(schema)
	})
	const onSubmit: SubmitHandler<CreateFormI> = async (data, e) => {
		try {
			await createCampaign(data)
			queryClient.refetchQueries(CampaignsQueryKeys.campaigns)
			push('/dashboard/campaigns')
		} catch (error) {
			console.log('test createCampaign error', error)
		}
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
