import dayjs, { Dayjs } from 'dayjs'
import { defaultRemainingTime } from './const'
import { DefaultRemainingTimeI, PushT } from './types'

const padWithZeros = (number: number, minLength: number) => {
	const numberString = number.toString()
	if (numberString.length >= minLength) return numberString
	return '0'.repeat(minLength - numberString.length) + numberString
}

const getRemainingSeconds = (nowDayjs: Dayjs, timestampDayJs: Dayjs): string => {
	const seconds = timestampDayJs.diff(nowDayjs, 'second') % 60
	return padWithZeros(seconds, 2)
}
const getRemainingMinutes = (nowDayjs: Dayjs, timestampDayJs: Dayjs): string => {
	const minuter = timestampDayJs.diff(nowDayjs, 'minutes') % 60
	return padWithZeros(minuter, 2)
}
const getRemainingHours = (nowDayjs: Dayjs, timestampDayJs: Dayjs): string => {
	const hours = timestampDayJs.diff(nowDayjs, 'hours') % 24
	return padWithZeros(hours, 2)
}
const getRemainingDays = (nowDayjs: Dayjs, timestampDayJs: Dayjs): string => {
	const days = timestampDayJs.diff(nowDayjs, 'days')
	return padWithZeros(days, 2)
}

const getRemainingTimeUtilMsTimestamp = (timestampMs: number, push: PushT): DefaultRemainingTimeI => {
	const timestampDayJs: Dayjs = dayjs(timestampMs)
	const nowDayjs: Dayjs = dayjs()

	if (timestampDayJs.isBefore(nowDayjs)) {
		push('/')
		return defaultRemainingTime
	}

	return {
		seconds: getRemainingSeconds(nowDayjs, timestampDayJs),
		minutes: getRemainingMinutes(nowDayjs, timestampDayJs),
		hours: getRemainingHours(nowDayjs, timestampDayJs),
		days: getRemainingDays(nowDayjs, timestampDayJs)
	}
}

export const updateRemainingTimer = (timestampMs: number, push: PushT): DefaultRemainingTimeI =>
	getRemainingTimeUtilMsTimestamp(timestampMs, push)
