import { css } from '@emotion/react'

export const primary = css`
	line-height: 1.5;
	font-family: var(--primary-font);
	font-weight: var(--fw-300);
	font-size: 1.0625rem;
`
export const primaryMediumFS = css`
	${primary}
	font-size:var(--fs-20);
`

export const secondary = css`
	font-weight: normal;
	color: var(--primary-color);
	letter-spacing: var(--ls-50);
	font-style: italic;
	font-family: var(--primary-font);
`

export const third = css`
	${primary}
`

export const oldPrice = css`
	text-decoration: line-through;
`
export const newPrice = css`
	color: var(--primary-color);
	font-weight: var(--fw-600);
`
export const discount = css`
	border: 2px;
	border-style: outset;
	color: var(--grey);
	padding: var(--pd-3px);
`
export const bigNumber = css`
	font-size: var(--fs-50);
	font-weight: var(--fw-600);
`
export const timerText = css`
	font-size: var(--fs-20);
	text-transform: uppercase;
	color: var(--dark-grey);
	font-weight: var(--fw-500);
`

export const error = css`
	position: absolute;
	color: red;
	left: 24px;
	bottom: -22px;
`

export const nav = css`
	color: white;
	padding: 10px;
	background-color: var(--secondary-color);
	border: 1px solid var(--third-color);
	cursor: pointer;

	&:hover {
		background-color: var(--primary-color);
		transition: 0.7s all;
	}
`
export const detailsRows = css`
	${primary}
	padding: var(--pd-10);
	padding-right: var(--pd-20);
	border: 1px solid var(--light-grey);
	/* background: red; */
`
