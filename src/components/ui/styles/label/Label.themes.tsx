import { css } from '@emotion/react'

export const primary = css`
	padding-bottom: var(--pd-10);
	color: var(--primary-color);
	font-weight: var(--fw-600);
`

export const secondary = css`
	padding-top: var(--pd-30);
	padding-bottom: var(--pd-20);
	color: white;
	font-weight: bold;
	font-size: 18px;
	text-align: center;
`

export const third = css`
	${secondary}
	text-align:left;
	font-size: 16px;
`
