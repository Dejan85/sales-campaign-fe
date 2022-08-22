import { IFormInput } from 'components/frontend/form/orders/OrdersForm'
import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { Textarea } from 'components/ui/styles/text-area'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { CampaignsI } from 'queries/campaigns/types'
import React, { useEffect, useState } from 'react'
import { UseFormRegister, UseFormHandleSubmit, SubmitHandler, FormState, UseFormGetValues } from 'react-hook-form'

interface FormLayoutI {
	register: UseFormRegister<IFormInput>
	handleSubmit: UseFormHandleSubmit<IFormInput>
	onSubmit: SubmitHandler<IFormInput>
	formState: FormState<IFormInput>
	campaign: CampaignsI | undefined
}

export const UpdateFormLayout: React.FC<FormLayoutI> = ({
	register,
	handleSubmit,
	onSubmit,
	formState: { errors },
	campaign
}): JSX.Element => {
	console.log('test campaign', campaign)

	return (
		<Container onSubmit={handleSubmit(onSubmit)} as="form" theme="formWrapper">
			<Input
				theme="primary"
				placeholder={errors.name ? errors.email?.message : 'Email'}
				{...register('email')}
				errors={errors.name}
			/>
			<Input
				theme="primary"
				placeholder={errors.name ? errors.address?.message : 'Unesite adresu za dostavu'}
				{...register('address')}
				errors={errors.address}
			/>

			<Input
				type="number"
				min={1}
				max={45}
				theme="primary"
				placeholder={errors.name ? errors.quantity?.message : 'Izaberite kolicinu'}
				{...register('quantity')}
				errors={errors.quantity}
			/>

			<Container theme="buttonWrapper">
				<Button type="submit" theme="primary">
					Save
				</Button>
			</Container>
		</Container>
	)
}
