import { css } from '@emotion/react'

export const primary = css`
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: var(--br-40);
	background-color: var(--primary-color);
	color: white;
	padding: var(--pd-input);
	max-width: var(--mwd-250);
	width: var(--wd-100-per);
	font-size: var(--fs-18);
	text-transform: uppercase;
	cursor: pointer;
`

export const secondary = css`
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: var(--br-20);
	background-color: var(--secondary-color);
	color: white;
	padding: var(--pd-10);
	font-size: var(--fs-15);
	text-transform: uppercase;
	cursor: pointer;

	&:hover {
		background: var(--primary-color);
		transition: 0.7s all;
	}
`

export const deleteBtn = css`
	${primary}
	background: var(--delete-red);
`
