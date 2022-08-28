import { setPageT } from 'pages/dashboard'

export interface CreateFormI {
	name: string
	expireDate: number | null
	activity: boolean
	slug: string
	therapyAirSmartDiscountPrice: string
	therapyAiriOnWhiteDiscountPrice: string
	therapyAiriOnBlackDiscountPrice: string
	therapyAirSmartPrice: string
	therapyAiriOnWhite: string
	therapyAiriOnBlack: string
}

export interface CreateFormPropsI {
	setPage: setPageT
}
