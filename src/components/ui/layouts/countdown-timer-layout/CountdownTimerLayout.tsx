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
			<ContainerComponent text="days" data={remainingTime.days} />
			<ContainerComponent text="hours" data={remainingTime.hours} />
			<ContainerComponent text="minutes" data={remainingTime.minutes} />
			<ContainerComponent text="seconds" data={remainingTime.seconds} />
		</Article>
	)
}
