import { Url } from 'url'

export interface CountdownTimerI {
	countdownTimestampMs: number
}

export interface DefaultRemainingTimeI {
	seconds: string
	minutes: string
	hours: string
	days: string
}

export type PushT = (url: string, as?: Url | undefined, options?: any) => Promise<boolean>
