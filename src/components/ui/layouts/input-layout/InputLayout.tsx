import { IFormInput } from 'components/frontend/form/orders/OrdersForm'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { InputThemeT } from 'components/ui/styles/input/Input.styles'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { UseFormRegister, FieldError } from 'react-hook-form'

interface InputLayoutI {
	theme: InputThemeT
	placeholder: string
	register: UseFormRegister<IFormInput>
	name: any
	errors: FieldError | undefined
}

export const InputLayout: React.FC<InputLayoutI> = ({ theme, placeholder, register, name, errors }): JSX.Element => {
	return (
		<Container theme="relative">
			<Input theme={theme} placeholder={errors ? errors.message : placeholder} {...register(name)} errors={errors} />
			{/* <Paragraph theme="error">{errors?.message}</Paragraph> */}
		</Container>
	)
}
