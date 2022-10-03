import { css } from '@emotion/react'

export const primary = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: var(--wd-100-per);
	padding: var(--pd-10);
	background-color: var(--secondary-color);
	color: white;
	cursor: pointer;

	&:hover {
		background: var(--primary-color);
		transition: 0.7s all;
	}
`

export const secondary = css`
	background: var(--primary-color);
	color: white;
	padding: var(--pd-5);
	cursor: pointer;
	border: none;
	border-radius: var(--br-5);

	&:hover {
		background: var(--secondary-color);
		transition: 0.7s all;
	}
`

export const third = css`
	${primary}
	width: 200px;
`
