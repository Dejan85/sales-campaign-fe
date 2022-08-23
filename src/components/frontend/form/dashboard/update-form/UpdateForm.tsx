import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateFormI } from './types'
import { schema } from 'components/frontend/form/dashboard/create-form/CreateForm'
import { CreateFormLayout } from 'components/ui/layouts/form-layout/dashboard/create-form'
import { CreateFormI } from '../create-form/types'
import { updateCampaign } from 'api/methods'
import { useQueryClient } from 'react-query'
import { CampaignsQueryKeys } from 'queries/campaigns/useCampaignsQuery'
import { InitialStateEnum } from 'context/dashboard/nav/types'

export const UpdateForm: React.FC<UpdateFormI> = ({ campaign, setPage }): JSX.Element => {
	const queryClient = useQueryClient()
	const campaignId = campaign?.id as number

	const { register, handleSubmit, formState, setValue } = useForm<CreateFormI>({
		resolver: yupResolver(schema),
		defaultValues: campaign
	})
	const onSubmit: SubmitHandler<CreateFormI> = async (data, e) => {
		console.log(data)

		try {
			const response = await updateCampaign(campaignId, data)
			console.log('test response', response)

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
