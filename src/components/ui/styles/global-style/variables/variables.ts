import { css } from '@emotion/react'
import { ifMobile } from '../selectors/ifMobile'

export const SizeVars = css`
	--ratio: 0.5rem;
	--size: 1rem;

	${ifMobile(css`
		--size: 0.85rem;
		--ratio: 0.25rem;
	`)};

	--size-biggest: calc(var(--size-bigger) + var(--ratio));
	--size-bigger: calc(var(--size-big) + var(--ratio));
	--size-big: calc(var(--size) + var(--ratio));
	--size-base: var(--size);
	--size-small: calc(var(--size) - var(--ratio));
	--size-smaller: max(calc(var(--size-small) - var(--ratio)), 0.25rem);
`
