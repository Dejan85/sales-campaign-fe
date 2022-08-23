import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import React, { useEffect, useState } from 'react'
import { Input } from 'components/ui/styles/input'
import { InputThemeT } from 'components/ui/styles/input/Input.styles'
import { FieldError, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { Container } from 'components/ui/styles/container'
import { Label } from 'components/ui/styles/label'

interface DatePickerLayoutI {
	theme: InputThemeT
	errors?: FieldError | undefined
	placeholder: string | undefined
	register: UseFormRegister<CreateFormI>
	setValue: UseFormSetValue<CreateFormI>
	label?: string
}

export const DatePickerLayout: React.FC<DatePickerLayoutI> = ({
	theme,
	placeholder,
	register,
	errors,
	setValue,
	label
}): JSX.Element => {
	const [startDate, setStartDate] = useState<Date | null>(null)

	const unixDateFormat = startDate && (Math.floor(new Date(startDate).getTime() / 1000) as number)

	useEffect(() => {
		setValue('date', unixDateFormat)
	}, [startDate])

	return (
		<Container theme="relative">
			{label && <Label theme="primary">{label}</Label>}
			<DatePicker
				showTimeSelect
				placeholderText={placeholder}
				selected={startDate}
				onChange={date => setStartDate(date)}
				customInput={<Input theme={theme} {...register('date')} errors={startDate ? undefined : errors} />}
			/>
		</Container>
	)
}
