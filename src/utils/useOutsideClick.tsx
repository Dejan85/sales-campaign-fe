import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react'

export function useOutsideClick(
	ref: MutableRefObject<null | HTMLInputElement>,
	setActive: Dispatch<SetStateAction<boolean>>
) {
	useEffect(() => {
		function handleClickOutside(e: { target: any }) {
			if (ref.current && !ref.current.contains(e.target)) {
				setActive(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref])
}
