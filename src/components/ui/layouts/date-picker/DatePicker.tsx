import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import React, { useEffect, useState } from 'react'
import { Input } from 'components/ui/styles/input'
import { InputThemeT } from 'components/ui/styles/input/Input.styles'
import { FieldError, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { Container } from 'components/ui/styles/container'
import { Label } from 'components/ui/styles/label'
import { LabelE } from 'components/ui/styles/label/Label.styles'

interface DatePickerLayoutI {
	theme: InputThemeT
	errors?: FieldError | undefined
	placeholder: string | undefined
	register: UseFormRegister<CreateFormI>
	setValue: UseFormSetValue<CreateFormI>
	getValues?: UseFormGetValues<CreateFormI>
	label?: string
}

export const DatePickerLayout: React.FC<DatePickerLayoutI> = ({
	theme,
	placeholder,
	register,
	errors,
	setValue,
	getValues,
	label
}): JSX.Element => {
	const dateValue = (getValues && getValues('expireDate')) || null
	const date = dateValue ? new Date(dateValue) : null

	const [startDate, setStartDate] = useState<Date | null>(date)
	const timestamp = startDate && new Date(startDate).getTime()

	useEffect(() => {
		setValue('expireDate', timestamp)
	}, [startDate])

	return (
		<Container theme="relative">
			{label && <Label theme={LabelE.primary}>{label}</Label>}
			<DatePicker
				showTimeSelect
				placeholderText={placeholder}
				selected={startDate}
				onChange={date => setStartDate(date)}
				customInput={<Input theme={theme} {...register('expireDate')} errors={startDate ? undefined : errors} />}
			/>
		</Container>
	)
}
