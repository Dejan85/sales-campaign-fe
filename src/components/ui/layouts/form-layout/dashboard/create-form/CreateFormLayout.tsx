import { CreateFormI } from 'components/frontend/form/dashboard/create-form/types'
import { DatePickerLayout } from 'components/ui/layouts/date-picker'
import { GroupLayout } from 'components/ui/layouts/group-layout'
import { InputLayout } from 'components/ui/layouts/input-layout'
import { SelectLayout } from 'components/ui/layouts/select-layout'
import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { LabelE } from 'components/ui/styles/label/Label.styles'
import { ModalContext } from 'context/modal/modalContext'
import { useContext } from 'react'
import {
	UseFormRegister,
	UseFormHandleSubmit,
	SubmitHandler,
	FormState,
	UseFormSetValue,
	UseFormGetValues
} from 'react-hook-form'
import { airSmart, therapyAiriOnBlack, therapyAiriOnWhite } from './const'
import { Group } from './partials/Group'

interface FormLayoutI {
	register: UseFormRegister<CreateFormI>
	handleSubmit: UseFormHandleSubmit<CreateFormI>
	onSubmit: SubmitHandler<CreateFormI>
	formState: FormState<CreateFormI>
	getValues?: UseFormGetValues<CreateFormI>
	setValue: UseFormSetValue<CreateFormI>
	deleteHandler?: () => Promise<void>
	id?: string
}

export const CreateFormLayout: React.FC<FormLayoutI> = ({
	register,
	handleSubmit,
	onSubmit,
	formState: { errors },
	setValue,
	getValues,
	deleteHandler,
	id
}): JSX.Element => {
	const { toggleModalAction } = useContext(ModalContext)
	console.log('test errors', errors)

	return (
		<Container onSubmit={handleSubmit(onSubmit)} as="form" theme="formWrapper">
			<InputLayout
				theme="primary"
				register={register}
				placeholder="Ime kampanje"
				name="name"
				errors={errors.name}
				label="Ime kampanje"
			/>

			<DatePickerLayout
				label="Datum isteka"
				theme="primary"
				placeholder={errors.expireDate ? errors.expireDate?.message : 'Datum isteka'}
				register={register}
				errors={errors.expireDate}
				getValues={getValues}
				setValue={setValue}
			/>

			<SelectLayout
				name="activity"
				theme="primary"
				placeholder="Da li je kampanja activna ili ne?"
				options={['true', 'false']}
				register={register}
				errors={errors.activity}
				label="Da li je kampanja activna ili ne?"
			/>

			<InputLayout
				theme="primary"
				register={register}
				placeholder="Slug"
				name="slug"
				errors={errors.slug}
				label="Slug"
			/>

			<InputLayout
				theme="primary"
				register={register}
				placeholder="Ukupan broj rezervacija"
				name="totalNumberOfReservations"
				errors={errors.slug}
				label="Ukupan broj rezervacija"
			/>

			<InputLayout
				theme="primary"
				register={register}
				placeholder="Trenutni nivo popusta"
				name="currentDiscountLevel"
				errors={errors.slug}
				label="Trenutni nivo popusta"
			/>

			<InputLayout
				theme="primary"
				register={register}
				placeholder="Potrebno validnih rezervacija"
				name="validReservationsRequired"
				errors={errors.slug}
				label="Potrebno validnih rezervacija"
			/>

			<InputLayout
				theme="primary"
				register={register}
				placeholder="Do sledeceg nivoa popusta"
				name="nextLevelOfDiscount"
				errors={errors.slug}
				label="Do sledeceg nivoa popusta"
			/>

			<Group register={register} errors={errors} data={airSmart} />
			<Group register={register} errors={errors} data={therapyAiriOnWhite} />
			<Group register={register} errors={errors} data={therapyAiriOnBlack} />

			<Container theme="buttonWrapper">
				<Button type="submit" theme="primary">
					Save
				</Button>

				{deleteHandler && (
					<Button
						type="button"
						theme="deleteBtn"
						onClick={() => {
							window.scrollTo(0, 0)
							toggleModalAction({ deleteHandler, id })
						}}
					>
						Delete
					</Button>
				)}
			</Container>
		</Container>
	)
}
