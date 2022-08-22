import { css } from '@emotion/react'

export const primary = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`

export const primaryBg = css`
	${primary}
	background-color: var(--light-blue);
`

export const secondary = css`
	display: flex;
	justify-content: center;
	width: var(--wd-1440);
	margin: var(--margin-center);
	padding: var(--pd-lr-10);
	padding-top: var(--pd-t-70px);
`

export const fullWidthBg = css`
	${secondary}
	width:100%;
	background-color: var(--light-blue);
`

export const dashboard = css`
	display: flex;
	justify-content: flex-start;
	min-height: 100vh;
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

export const relative = css`
	display: flex;
	flex-direction: column;
	position: relative;
	width: var(--wd-100-per);
`

export const formWrapper = css`
	display: flex;
	flex-direction: column;
	max-width: var(--mwd-800);
	width: var(--wd-100-per);
	gap: var(--gp-30);
	padding-top: var(--pd-t-70px);
`

export const inputWrapper = css`
	display: flex;
	gap: var(--gp-20);
`

export const buttonWrapper = css`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: var(--gp-50);
	padding-top: var(--pd-t-20px);
`

export const table = css`
	margin-top: var(--pd-70);
	margin-left: var(--pd-50);
`

export const tableHeader = css`
	display: grid;
	grid-template-columns: repeat(8, minmax(25px, 150px));
	grid-template-rows: repeat(auto-fill);
	/* grid-row-gap: 120px; */
	/* grid-column-gap: 20px; */
	/* margin-top: 70px;
	margin-left: 30px; */

	/* outline: 1px solid red; */
`

export const tableBody = css`
	${tableHeader}
`
