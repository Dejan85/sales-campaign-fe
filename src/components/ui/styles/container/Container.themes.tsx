import { css } from '@emotion/react'

export const primary = css`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`

export const primaryRow = css`
	display: flex;
	position: relative;
	min-height: 100vh;
	height: 100%;
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
	padding: var(--pd-10);
	padding-top: var(--pd-t-70px);
	padding-bottom: var(--pd-50);
`

export const third = css`
	${secondary}
	justify-content:left;
	padding-bottom: 0px;
`

export const fullWidthBg = css`
	${secondary}
	width:100%;
	background-color: var(--light-blue);
`

export const flexRow = css`
	display: flex;
`

export const flexColumn = css`
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
`

export const flexCenterAbsolute = css`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: -1;
`

export const dashboard = css`
	display: flex;
	justify-content: flex-start;
	min-height: 100vh;
`

export const wrapper = css`
	display: flex;
	flex-direction: column;
`

export const linkWrapper = css`
	${wrapper}
	padding-top: var(--pd-t-50px);
	gap: 20px;
`

export const linkWrapperSecondary = css`
	width: var(--wd-200);
	margin-top: var(--pd-t-70px);
	margin-left: var(--pd-t-70px);
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
`

export const inputWrapper = css`
	display: flex;
	flex-wrap: wrap;
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
	display: grid;
	/* max-width: var(--wd-900); */
	max-width: var(--wd-1440);
	width: var(--wd-100-per);
	border: 1px solid var(--grey);
	margin-top: var(--pd-50);
	margin-left: var(--pd-70);
`

export const details = css`
	display: flex;
	flex-direction: column;
	width: var(--wd-100-per);
	padding-top: var(--pd-70);
	padding-left: var(--pd-70);
`

export const detailsRows = css`
	border: 1px solid var(--light-grey);
`

export const modal = css`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	width: 100%;
	height: 100%;
	background: rgba(23, 22, 21, 0.5);

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

export const modalContent = css`
	${wrapper}
	justify-content:center;
	background: white;
	max-width: 650px;
	width: 100%;
	padding: 30px 0px;
`
export const groupLayout = css`
	display: flex;
	flex-direction: column;
	background-color: var(--secondary-color);
	padding: 0 20px 30px 20px;
	border-radius: 20px;
`
