import { createContext } from 'react'
import { modalAction } from './action'
import { ModalActionReturnI } from './types'

const ModalContext = createContext<any>({})

const ModalProvider = ({ children }: { children: JSX.Element }) => {
	const { state, toggleModalAction, toggleNewsLetterModalAction }: ModalActionReturnI = modalAction()

	return (
		<ModalContext.Provider
			value={{
				toggleModalAction,
				toggleNewsLetterModalAction,
				...state
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}

export { ModalContext, ModalProvider }
