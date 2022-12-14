import { css } from '@emotion/react'

export const primary = css`
	width: 100%;
	border-radius: var(--br-40);
	border: none;
	padding: var(--pd-input);
	font-size: var(--fs-input);
	color: var(--grey);
	background: white;

	&:focus {
		border: none;
		outline: none;
	}

	&::placeholder {
		font-size: var(--fs-input);
	}
`
