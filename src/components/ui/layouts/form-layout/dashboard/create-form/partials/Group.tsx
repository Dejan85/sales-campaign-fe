import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { GroupLayout } from 'components/ui/layouts/group-layout'
import { InputLayout } from 'components/ui/layouts/input-layout'
import { Container } from 'components/ui/styles/container'
import { LabelE } from 'components/ui/styles/label/Label.styles'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { DataT } from '../const'

interface GroupI {
	register: UseFormRegister<CreateFormI>
	errors: any
	data: DataT
}

export const Group: React.FC<GroupI> = ({ register, errors, data }): JSX.Element => {
	return (
		<GroupLayout label={data[0].placeholderAndLabel}>
			<Container theme="inputWrapper">
				{data.map((item, index) => {
					return (
						<InputLayout
							key={index}
							type="number"
							theme="primary"
							register={register}
							placeholder={item.placeholderAndLabel}
							name={item.name}
							errors={errors[item.name]}
							label={item.placeholderAndLabel}
							labelTheme={LabelE.third}
						/>
					)
				})}
			</Container>
		</GroupLayout>
	)
}
