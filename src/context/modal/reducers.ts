import { ActionI, InitialStateI } from './types'

export const initialState: InitialStateI = {
	toggleModal: false,
	deleteHandler: async (id: number) => {},
	message: '',
	id: null
}

export const reducer = (state: InitialStateI, action: ActionI) => {
	switch (action.type) {
		case 'show-modal':
			return {
				...state,
				toggleModal: !state.toggleModal,
				deleteHandler: action.payload?.deleteHandler,
				message: action.payload?.message,
				id: action.payload?.id
			}
		default:
			return state
	}
}
