import { InitialStateEnum, InitialStateI } from './types'

export const initialState: InitialStateI = {
	page: InitialStateEnum.campaigns
}

export const reducer = (state: any, action: { type: InitialStateEnum; payload: InitialStateEnum }) => {
	switch (action.type) {
		case 'campaigns':
			return {
				...state,
				page: action.payload
			}
		case 'orders':
			return {
				...state,
				page: action.payload
			}
		default:
			return state
	}
}
