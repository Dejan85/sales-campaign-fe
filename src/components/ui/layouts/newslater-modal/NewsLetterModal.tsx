import { Container } from 'components/ui/refactore/container/Container.styles'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { ModalContext } from 'context/modal/modalContext'
import React, { useContext, useEffect, useRef } from 'react'
import { useOutsideClick } from 'utils'
import { Form, FormWrapper, ModalContainer } from './NewsLetterModal.styles'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/ui/styles/input'
import { Button } from 'components/ui/styles/button'
import { followPromotions, getFollowers } from 'api/methods'

const schema = yup.object().shape({
	email: yup.string().required('Email je obavezan')
})

interface NewsLetterI {
	email: string
}

export const NewsLetterModal: React.FC = (): JSX.Element => {
	const { toggleNewsLetterModalAction } = useContext(ModalContext)
	const ModalRef = useRef(null)
	useOutsideClick(ModalRef, toggleNewsLetterModalAction)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<NewsLetterI>({
		resolver: yupResolver(schema)
	})

	const onSubmit: SubmitHandler<NewsLetterI> = async data => {
		try {
			await followPromotions(data)
			toggleNewsLetterModalAction()
		} catch (error) {
			console.log('test create order error', error)
		}
	}

	useEffect(() => {
		getFollowers().then(res => {
			console.log('test', res)
		})
	}, [])

	return (
		<ModalContainer>
			<FormWrapper ref={ModalRef}>
				<Paragraph theme="primary">Upisite email kako bi pratili akcije</Paragraph>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input
						style={{
							border: '1px solid black',
							borderRadius: '10px',
							padding: '10px'
						}}
						theme="primary"
						placeholder={errors.email ? errors.email?.message : 'Unesite Email'}
						{...register('email')}
						errors={errors.email}
					/>
					<Button style={{ padding: '10px' }} theme="tableBtn">
						Submit
					</Button>
				</Form>
			</FormWrapper>
		</ModalContainer>
	)
}
