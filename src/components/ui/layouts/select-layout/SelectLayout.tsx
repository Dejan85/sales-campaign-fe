import { Container } from 'components/ui/styles/container'
import { Label } from 'components/ui/styles/label'
import { Select } from 'components/ui/styles/select'
import { SelectThemeT } from 'components/ui/styles/select/Select.styles'
import { ChangeEvent } from 'react'
import { FieldError } from 'react-hook-form'

interface InputLayoutI {
	theme: SelectThemeT
	placeholder?: string
	register: any
	name: any
	errors: FieldError | undefined
	options: string[]
	onChange?: React.Dispatch<React.SetStateAction<string | undefined>>
	label?: string
}

export const SelectLayout: React.FC<InputLayoutI> = ({
	theme,
	placeholder,
	register,
	name,
	options,
	errors,
	onChange,
	label
}): JSX.Element => {
	return (
		<Container theme="relative">
			{label && <Label theme="primary">{label}</Label>}
			<Select
				theme={theme}
				{...register(name)}
				errors={errors}
				onChange={(e: ChangeEvent<HTMLSelectElement>) => {
					onChange && onChange(e.target.value)
				}}
				name={name}
			>
				{/* {placeholder && (
				<option disabled value="nothingSelect">
					{errors ? errors.message : placeholder}
				</option>
			)} */}
				{/* <optgroup label="Select whether the campaign active or not"> */}
				{options.map((item, index: number) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
				{/* </optgroup> */}
			</Select>
		</Container>
	)
}
