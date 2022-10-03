import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { Textarea } from 'components/ui/styles/text-area'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { OrdersI } from 'queries/orders/types'
import React, { useState } from 'react'
import { UseFormRegister, UseFormHandleSubmit, SubmitHandler, FormState, UseFormSetError } from 'react-hook-form'
import { SelectLayout } from '../../select-layout'
import { termsOptions } from './const'

interface OrdersFormLayoutI {
	register: UseFormRegister<OrdersI>
	handleSubmit: UseFormHandleSubmit<OrdersI>
	onSubmit: SubmitHandler<OrdersI>
	setError: UseFormSetError<OrdersI>
	formState: FormState<OrdersI>
}

export const OrdersFormLayout: React.FC<OrdersFormLayoutI> = ({
	register,
	handleSubmit,
	onSubmit,
	setError,
	formState: { errors }
}): JSX.Element => {
	const [showWishDiscount, setShowWishDiscount] = useState<string>()
	const wishDiscount: boolean = showWishDiscount === termsOptions[2]

	return (
		<Container onSubmit={handleSubmit(onSubmit)} as="form" theme="formWrapper">
			<Container theme="inputWrapper">
				<Input
					theme="primary"
					placeholder={errors.name ? errors.name?.message : 'Unesite ime i prezime'}
					{...register('name')}
					errors={errors.name}
				/>

				<Input
					theme="primary"
					placeholder={errors.name ? errors.phone?.message : 'Unesite broj telefona'}
					{...register('phone')}
					errors={errors.name}
				/>
			</Container>
			<Input
				theme="primary"
				placeholder={errors.name ? errors.email?.message : 'Email'}
				{...register('email')}
				errors={errors.name}
			/>
			{/* <SelectLayout
				name="model"
				theme="primary"
				placeholder="Izaberite model"
				options={['Therapy Air Smart', 'Therapy Air beli', 'Therapy Air crni']}
				register={register}
				errors={errors.model}
			/> */}
			<Input
				type="number"
				min={1}
				theme="primary"
				placeholder={errors.name ? errors.quantity?.message : 'Upišite broj komada'}
				{...register('quantity')}
				errors={errors.quantity}
			/>

			<SelectLayout
				name="terms"
				theme="primary"
				options={termsOptions}
				register={register}
				errors={errors.terms}
				onChange={setShowWishDiscount}
				label="Odaberite uslove"
			/>

			{wishDiscount && (
				<Input
					type="number"
					min={1}
					max={45}
					theme="primary"
					placeholder={errors.name ? errors.wishDiscount?.message : 'Unesite zeljeni popust'}
					{...register('wishDiscount')}
					errors={errors.wishDiscount}
				/>
			)}

			<Textarea rows={10} theme="primary" placeholder="Napomena" {...register('message')} />
			<Container theme="buttonWrapper">
				<Button type="submit" theme="primary">
					Potvrdi
				</Button>
				<Paragraph theme="primary">
					Besplatna dostava na teritoriji Republike Srbije. Za sve proizvode koji su dostupni i raspoloživi krajnji rok
					isporuke je 5 radnih dana.
				</Paragraph>
			</Container>
		</Container>
	)
}
