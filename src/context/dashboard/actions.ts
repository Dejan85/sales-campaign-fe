import { useReducer } from 'react'
import { initialState, reducer } from './reducers'
import { InitialStateEnum, SetNavPageI } from './types'

export const setNavPageAction = (): SetNavPageI => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const setPage = (page: InitialStateEnum): void => {
		dispatch({ type: page, payload: page })
	}

	return {
		setPage,
		state
	}
}
