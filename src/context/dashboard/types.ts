export interface InitialStateI {
	page: 'campaigns' | 'orders'
}

export enum InitialStateEnum {
	campaigns = 'campaigns',
	orders = 'orders'
}

export interface SetNavPageI {
	setPage: (page: InitialStateEnum) => void
	state: InitialStateI
}
