import React, { useEffect, useState } from 'react'
import { defaultRemainingTime } from './const'
import { updateRemainingTimer } from './utils'
import { CountdownTimerI, DefaultRemainingTimeI } from './types'
import { CountdownTimerLayout } from 'components/ui/layouts/countdown-timer-layout'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'

export const CountdownTimer: React.FC<CountdownTimerI> = ({
	countdownTimestampMs,
	setCountdownExpire
}): JSX.Element => {
	const { push } = useRouter()
	const [remainingTime, setRemainingTime] = useState<DefaultRemainingTimeI>(defaultRemainingTime)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setRemainingTime(updateRemainingTimer(countdownTimestampMs))
		}, 1000)

		return () => clearInterval(intervalId)
	}, [countdownTimestampMs])

	return <CountdownTimerLayout remainingTime={remainingTime} />
}
