import { DefaultRemainingTimeI } from 'components/frontend/countdown-timer/types'
import React from 'react'
import { Article } from '../../styles/article'
import { ContainerComponent } from './partials/ContainerComponent'

interface CountdownTimerLayoutI {
	remainingTime: DefaultRemainingTimeI
}

export const CountdownTimerLayout: React.FC<CountdownTimerLayoutI> = ({ remainingTime }): JSX.Element => {
	return (
		<Article theme="timer">
			<ContainerComponent text="dan" data={remainingTime.days} />
			<ContainerComponent text="sat" data={remainingTime.hours} />
			<ContainerComponent text="minut" data={remainingTime.minutes} />
			<ContainerComponent text="sekund" data={remainingTime.seconds} />
		</Article>
	)
}
