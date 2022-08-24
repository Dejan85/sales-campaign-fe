export interface OrdersI {
	name: string
	phone: string
	email: string
	address: string
	quantity: string
	message: string
	terms: string
	wishDiscount: string
	model: string
}

export interface OrdersQueryReturnI {
	orders: OrdersI[] | undefined
}
