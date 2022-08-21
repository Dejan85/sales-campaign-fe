import { IFormInput } from 'components/frontend/form/Form'
import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { Textarea } from 'components/ui/styles/text-area'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import React from 'react'
import { UseFormRegister, UseFormHandleSubmit, SubmitHandler, FieldErrorsImpl } from 'react-hook-form'
import { InputLayout } from '../input-layout'

interface FormLayoutI {
	register: UseFormRegister<IFormInput>
	handleSubmit: UseFormHandleSubmit<IFormInput>
	onSubmit: SubmitHandler<IFormInput>
	errors: FieldErrorsImpl<IFormInput>
}

export const FormLayout: React.FC<FormLayoutI> = ({ register, handleSubmit, onSubmit, errors }): JSX.Element => {
	console.log('test errors', errors)

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

			<Input
				theme="primary"
				placeholder={errors.name ? errors.address?.message : 'Unesite adresu za dostavu'}
				{...register('address')}
				errors={errors.address}
			/>

			<Input
				theme="primary"
				placeholder={errors.name ? errors.model?.message : 'Izaberite model'}
				{...register('address')}
				errors={errors.model}
			/>

			<Input
				type="number"
				min={0}
				max={45}
				theme="primary"
				placeholder={errors.name ? errors.quantity?.message : 'Izaberite kolicinu'}
				{...register('quantity')}
				errors={errors.quantity}
			/>

			<Textarea rows={10} theme="primary" placeholder="Napomena" {...register('message')} />
			<Container theme="buttonWrapper">
				<Button type="submit" theme="primary">
					Naruci odmah!
				</Button>
				<Paragraph theme="primary">
					Besplatna dostava na teritoriji Republike Srbije. Za sve proizvode koji su dostupni i raspoloživi krajnji rok
					isporuke je 5 radnih dana.
				</Paragraph>
			</Container>
		</Container>
	)
}
