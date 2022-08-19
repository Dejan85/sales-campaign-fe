export interface CountdownTimerI {
	countdownTimestampMs: number
	setCountdownExpire: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DefaultRemainingTimeI {
	seconds: string
	minutes: string
	hours: string
	days: string
}
