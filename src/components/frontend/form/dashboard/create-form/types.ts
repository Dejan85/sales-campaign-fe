import { setPageT } from 'pages/dashboard'

export interface CreateFormI {
	name: string
	expireDate: number | null
	activity: boolean
	slug: string

	totalNumberOfReservations: string,
	currentDiscountLevel: string,
	validReservationsRequired: string,
	nextLevelOfDiscount: string,

	airSmartPrice: string,
	airSmartDiscountPrice: string,
	airSmartDiscountPercent: string,
	airSmartDevicesInStock: string,

	airiOnWhitePrice: string,
	airiOnWhiteDiscountPrice: string,
	airiOnWhiteDiscountPercent: string,
	airiOnWhiteDevicesInStock: string,

	airiOnBlackPrice: string,
	airiOnBlackDiscountPrice: string,
	airiOnBlackDiscountPercent: string,
	airiOnBlackDevicesInStock: string
}

export interface CreateFormPropsI {
	setPage: setPageT
}
