import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CreateFormI, CreateFormPropsI } from './types'
import { CreateFormLayout } from 'components/ui/layouts/form-layout/dashboard/create-form'
import { createCampaign } from 'api/methods'
import { CampaignsQueryKeys } from 'queries/campaigns/useCampaignsQuery'
import { useQueryClient } from 'react-query'
import { InitialStateEnum } from 'context/dashboard/nav/types'

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	expireDate: yup.number().required('Expire Date is required').nullable(),
	activity: yup.boolean(),
	slug: yup.string().required('Slug is required'),
	therapyAirSmartDiscountPrice: yup.string().required('Therapy Air Smart discount price is required'),
	therapyAiriOnWhiteDiscountPrice: yup.string().required('Therapy Air iOn White discount price is required'),
	therapyAiriOnBlackDiscountPrice: yup.string().required('Therapy Air iOn Black discount price is required'),

	therapyAirSmartPrice: yup.string().required('Therapy Air Smart price is required'),
	therapyAiriOnWhite: yup.string().required('Therapy Air iOn White price is required'),
	therapyAiriOnBlack: yup.string().required('Therapy Air iOn Black price is required')
})

export const CreateForm: React.FC<CreateFormPropsI> = ({ setPage }): JSX.Element => {
	const queryClient = useQueryClient()

	const { register, handleSubmit, formState, setValue } = useForm<CreateFormI>({
		resolver: yupResolver(schema)
	})
	const onSubmit: SubmitHandler<CreateFormI> = async (data, e) => {
		try {
			const response = await createCampaign(data)
			queryClient.refetchQueries(CampaignsQueryKeys.campaigns)
			setPage(InitialStateEnum.campaigns)
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
