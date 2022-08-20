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
