import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { InputThemeT } from 'components/ui/styles/input/Input.styles'
import { Label } from 'components/ui/styles/label'
import { LabelE } from 'components/ui/styles/label/Label.styles'
import { FieldError } from 'react-hook-form'

interface InputLayoutI {
	theme: InputThemeT
	placeholder?: string
	register: any
	name: any
	errors: FieldError | undefined
	label: string
	labelTheme?: LabelE.primary | LabelE.secondary | LabelE.third
	type?: 'string' | 'number'
	min?: number
	max?: number
}

export const InputLayout: React.FC<InputLayoutI> = ({
	theme,
	placeholder,
	register,
	name,
	errors,
	label,
	labelTheme = LabelE.primary,
	type,
	min,
	max
}): JSX.Element => {
	return (
		<Container theme="relative">
			{label && <Label theme={labelTheme}>{label}</Label>}
			<Input
				type={type}
				min={min}
				max={max}
				theme={theme}
				placeholder={errors ? errors.message : placeholder}
				{...register(name)}
				errors={errors}
			/>
			{/* <Paragraph theme="error">{errors?.message}</Paragraph> */}
		</Container>
	)
}
