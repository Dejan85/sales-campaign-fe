import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Input } from 'components/ui/styles/input'
import { Textarea } from 'components/ui/styles/text-area'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import React from 'react'

export const FormLayout: React.FC = (): JSX.Element => {
	return (
		<Container theme="formWrapper">
			<Container theme="inputWrapper">
				<Input theme="primary" placeholder="Unesite ime i prezime" />
				<Input theme="primary" placeholder="Unesite broj telefona" />
			</Container>
			<Input theme="primary" placeholder="Email" />
			<Input theme="primary" placeholder="Unesite adresu za dostavu" />
			<Input theme="primary" placeholder="Izaberite model" />
			<Input theme="primary" placeholder="Izaberite kolicinu" />
			<Textarea rows={10} theme="primary" placeholder="Napomena" />
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
