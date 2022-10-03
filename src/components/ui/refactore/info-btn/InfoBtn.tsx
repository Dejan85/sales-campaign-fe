import React, { useState } from 'react'
import { Tooltip } from '../tooltip'
import { InfoBtnComponent } from './InfoBtn.styles'

interface InfoBtnI {
	text: string
}

export const InfoBtn: React.FC<InfoBtnI> = ({ text }): JSX.Element => {
	const [toggleTooltip, setToggleTooltip] = useState<boolean>(false)

	const onMouseOverHandler = () => setToggleTooltip(true)
	const onMouseLeave = () => setToggleTooltip(false)

	return (
		<>
			{toggleTooltip && <Tooltip text={text} />}
			<InfoBtnComponent onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeave}>
				i
			</InfoBtnComponent>
		</>
	)
}
