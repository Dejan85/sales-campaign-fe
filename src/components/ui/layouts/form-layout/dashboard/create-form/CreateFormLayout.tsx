import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { IFormInput } from 'components/frontend/form/orders/OrdersForm'
import { DatePickerLayout } from 'components/ui/layouts/date-picker'
import { InputLayout } from 'components/ui/layouts/input-layout'
import { SelectLayout } from 'components/ui/layouts/select-layout'
import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { Select } from 'components/ui/styles/select'
import React, { useEffect, useState } from 'react'
import { UseFormRegister, UseFormHandleSubmit, SubmitHandler, FormState, UseFormSetValue } from 'react-hook-form'

interface FormLayoutI {
	register: UseFormRegister<CreateFormI>
	handleSubmit: UseFormHandleSubmit<CreateFormI>
	onSubmit: SubmitHandler<CreateFormI>
	formState: FormState<CreateFormI>
	setValue: UseFormSetValue<CreateFormI>
}

export const CreateFormLayout: React.FC<FormLayoutI> = ({
	register,
	handleSubmit,
	onSubmit,
	formState: { errors },
	setValue
}): JSX.Element => {
	console.log('test errors', errors)

	return (
		<Container onSubmit={handleSubmit(onSubmit)} as="form" theme="formWrapper">
			<InputLayout
				theme="primary"
				register={register}
				placeholder="Name of campaign"
				name="name"
				errors={errors.name}
				label="Name of campaign"
			/>

			<DatePickerLayout
				label="Set expire date"
				theme="primary"
				placeholder={errors.expireDate ? errors.expireDate?.message : 'Expire date'}
				register={register}
				errors={errors.expireDate}
				setValue={setValue}
			/>

			<SelectLayout
				name="activity"
				theme="primary"
				placeholder="Active"
				options={['true', 'false']}
				register={register}
				errors={errors.activity}
				label="Set activity of campaign"
			/>

			<InputLayout
				theme="primary"
				register={register}
				placeholder="Slug"
				name="slug"
				errors={errors.slug}
				label="Slug"
			/>

			<Container theme="inputWrapper">
				<InputLayout
					type="number"
					theme="primary"
					register={register}
					placeholder="Therapy Air Smart Price"
					name="therapyAirSmartPrice"
					errors={errors.therapyAirSmartPrice}
					label="Therapy Air Smart Price"
				/>

				<InputLayout
					type="number"
					theme="primary"
					register={register}
					placeholder="Therapy Air Smart Discount Price"
					name="therapyAirSmartDiscountPrice"
					errors={errors.therapyAirSmartDiscountPrice}
					label="Therapy Air Smart Discount Price"
				/>
			</Container>

			<Container theme="inputWrapper">
				<InputLayout
					type="number"
					theme="primary"
					register={register}
					placeholder="Therapy Air iOn White"
					name="therapyAiriOnWhite"
					errors={errors.therapyAiriOnWhite}
					label="Therapy Air iOn White"
				/>

				<InputLayout
					type="number"
					theme="primary"
					register={register}
					placeholder="Therapy Air iOn White Discount Price"
					name="therapyAiriOnWhiteDiscountPrice"
					errors={errors.therapyAiriOnWhiteDiscountPrice}
					label="Therapy Air iOn White Discount Price"
				/>
			</Container>

			<Container theme="inputWrapper">
				<InputLayout
					type="number"
					theme="primary"
					register={register}
					placeholder="Therapy Air iOn Black"
					name="therapyAiriOnBlack"
					errors={errors.therapyAiriOnBlack}
					label="Therapy Air iOn Black"
				/>

				<InputLayout
					type="number"
					theme="primary"
					register={register}
					placeholder="Therapy Air iOn Black Discount Price"
					name="therapyAiriOnBlackDiscountPrice"
					errors={errors.therapyAiriOnBlackDiscountPrice}
					label="Therapy Air iOn Black Discount Price"
				/>
			</Container>

			<Container theme="buttonWrapper">
				<Button type="submit" theme="primary">
					Save
				</Button>
			</Container>
		</Container>
	)
}
