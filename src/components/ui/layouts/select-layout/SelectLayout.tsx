import { IFormInput } from 'components/frontend/form/orders/OrdersForm'
import { Select } from 'components/ui/styles/select'
import { SelectThemeT } from 'components/ui/styles/select/Select.styles'
import { ChangeEvent } from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'

interface InputLayoutI {
	theme: SelectThemeT
	placeholder?: string
	register: UseFormRegister<IFormInput>
	name: any
	errors: FieldError | undefined
	options: string[]
	onChange?: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const SelectLayout: React.FC<InputLayoutI> = ({
	theme,
	placeholder,
	register,
	name,
	options,
	errors,
	onChange
}): JSX.Element => {
	return (
		<Select
			theme={theme}
			{...register(name)}
			errors={errors}
			onChange={(e: ChangeEvent<HTMLSelectElement>) => {
				onChange && onChange(e.target.value)
			}}
		>
			{placeholder && <option value="nothingSelect">{errors ? errors.message : placeholder}</option>}
			{options.map((item, index: number) => (
				<option key={index} value={item}>
					{item}
				</option>
			))}
		</Select>
	)
}
