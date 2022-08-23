import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { IFormInput } from 'components/frontend/form/orders/OrdersForm'
import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import React, { useEffect, useState } from 'react'
import { UseFormRegister, UseFormHandleSubmit, SubmitHandler, FormState } from 'react-hook-form'

interface FormLayoutI {
	register: UseFormRegister<CreateFormI>
	handleSubmit: UseFormHandleSubmit<CreateFormI>
	onSubmit: SubmitHandler<CreateFormI>
	formState: FormState<CreateFormI>
}

export const CreateFormLayout: React.FC<FormLayoutI> = ({
	register,
	handleSubmit,
	onSubmit,
	formState: { errors }
}): JSX.Element => {
	return (
		<Container onSubmit={handleSubmit(onSubmit)} as="form" theme="formWrapper">
			<Input
				theme="primary"
				placeholder={errors.name ? errors.name?.message : 'Name of campaign'}
				{...register('name')}
				errors={errors.name}
			/>
			<Input
				theme="primary"
				placeholder={errors.date ? errors.date?.message : 'date'}
				{...register('date')}
				errors={errors.date}
			/>

			<Input
				theme="primary"
				placeholder={errors.active ? errors.active?.message : 'Active'}
				{...register('active')}
				errors={errors.active}
			/>

			<Input
				type="string"
				theme="primary"
				placeholder={errors.active ? errors.slug?.message : 'Slug'}
				{...register('slug')}
				errors={errors.slug}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={
					errors.therapyAirSmartDiscountPrice
						? errors.therapyAirSmartDiscountPrice?.message
						: 'therapyAirSmartDiscountPrice'
				}
				{...register('therapyAirSmartDiscountPrice')}
				errors={errors.therapyAirSmartDiscountPrice}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={
					errors.therapyAiriOnWhiteDiscountPrice
						? errors.therapyAiriOnWhiteDiscountPrice?.message
						: 'therapyAiriOnWhiteDiscountPrice'
				}
				{...register('therapyAiriOnWhiteDiscountPrice')}
				errors={errors.therapyAiriOnWhiteDiscountPrice}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={
					errors.therapyAiriOnBlackDiscountPrice
						? errors.therapyAiriOnBlackDiscountPrice?.message
						: 'therapyAiriOnBlackDiscountPrice'
				}
				{...register('therapyAiriOnBlackDiscountPrice')}
				errors={errors.therapyAiriOnBlackDiscountPrice}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={errors.therapyAirSmartPrice ? errors.therapyAirSmartPrice?.message : 'therapyAirSmartPrice'}
				{...register('therapyAirSmartPrice')}
				errors={errors.therapyAirSmartPrice}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={errors.therapyAiriOnWhite ? errors.therapyAiriOnWhite?.message : 'therapyAiriOnWhite'}
				{...register('therapyAiriOnWhite')}
				errors={errors.therapyAiriOnWhite}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={errors.therapyAiriOnBlack ? errors.therapyAiriOnBlack?.message : 'therapyAiriOnBlack'}
				{...register('therapyAiriOnBlack')}
				errors={errors.therapyAiriOnBlack}
			/>

			<Container theme="buttonWrapper">
				<Button type="submit" theme="primary">
					Save
				</Button>
			</Container>
		</Container>
	)
}
