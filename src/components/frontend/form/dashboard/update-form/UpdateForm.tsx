import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateFormI } from './types'
import { schema } from 'components/frontend/form/dashboard/create-form/CreateForm'
import { CreateFormLayout } from 'components/ui/layouts/form-layout/dashboard/create-form'
import { CreateFormI } from '../create-form/types'
import { deleteCampaign, updateCampaign } from 'api/methods'
import { useQueryClient } from 'react-query'
import { useRouter } from 'next/router'

export const UpdateForm: React.FC<UpdateFormI> = ({ campaign }): JSX.Element => {
	const queryClient = useQueryClient()
	const { push, query } = useRouter()
	const id = query.id as string

	const { register, handleSubmit, formState, setValue, getValues } = useForm<CreateFormI>({
		resolver: yupResolver(schema),
		defaultValues: campaign
	})
	const onSubmit: SubmitHandler<CreateFormI> = async (data, e) => {
		try {
			await updateCampaign(id, data)
			queryClient.refetchQueries()
			push('/dashboard/campaigns')
		} catch (error) {
			console.log('test createCampaign error', error)
		}
	}

	const deleteHandler = async (): Promise<void> => {
		try {
			await deleteCampaign(id)
			push('/dashboard/campaigns')
		} catch (error) {
			console.log('test createCampaign error', error)
		}
	}

	return (
		<CreateFormLayout
			id={id}
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			formState={formState}
			setValue={setValue}
			getValues={getValues}
			deleteHandler={deleteHandler}
		/>
	)
}
