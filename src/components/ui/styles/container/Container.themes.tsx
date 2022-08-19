import { css } from '@emotion/react'

export const primary = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`

export const secondary = css`
	display: flex;
	width: var(--wd-1440-px);
	margin: var(--margin-center);
	padding: var(--pd-lr-10);
`

export const wrapper = css`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const linkWrapper = css`
	${wrapper}
	padding-top: var(--pd-t-50px);
`

export const imageWrapper = css`
	display: flex;
	position: relative;
	width: var(--wd-100-per);
`
