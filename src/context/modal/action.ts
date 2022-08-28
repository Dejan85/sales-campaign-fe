import { useReducer } from 'react'
import { initialState, reducer } from './reducers'
import { ModalActionReturnI, PayloadI } from './types'

export const modalAction = (): ModalActionReturnI => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const toggleModalAction = (props: PayloadI): void => {
		dispatch({ type: 'show-modal', payload: props })
	}

	return {
		toggleModalAction,
		state
	}
}
