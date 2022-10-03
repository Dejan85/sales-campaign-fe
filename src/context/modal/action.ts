import { useEffect, useReducer } from 'react'
import { initialState, reducer } from './reducers'
import { ModalActionReturnI, PayloadI } from './types'

export const modalAction = (): ModalActionReturnI => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const toggleModalAction = (props: PayloadI): void => {
		if (state.toggleNewsLetterModal) {
			document.body.style.overflow = 'auto'
		} else {
			document.body.style.overflow = 'hidden'
		}

		dispatch({ type: 'show-modal', payload: props })
	}

	const toggleNewsLetterModalAction = (): void => {
		if (state.toggleNewsLetterModal) {
			document.body.style.overflow = 'auto'
		} else {
			document.body.style.overflow = 'hidden'
		}

		dispatch({ type: 'show-newsletter-modal', payload: {} })
	}

	return {
		toggleModalAction,
		toggleNewsLetterModalAction,
		state
	}
}


