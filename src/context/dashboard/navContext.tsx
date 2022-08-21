import { createContext } from 'react'
import { setNavPageAction } from './actions'
import { SetNavPageI } from './types'

const NavContext = createContext<any>({})

const NavProvider = ({ children }: { children: JSX.Element }) => {
	const { state, setPage }: SetNavPageI = setNavPageAction()

	return (
		<NavContext.Provider
			value={{
				setPage,
				...state
			}}
		>
			{children}
		</NavContext.Provider>
	)
}

export { NavContext, NavProvider }
