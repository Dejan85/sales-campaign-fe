import { CSSInterpolation } from '@emotion/serialize'
import { css } from '@emotion/react'

type StyleSelector = (styles: CSSInterpolation) => CSSInterpolation

/**
 * Applies the passed styles to devices with screen sizes smaller than 768px
 */
export const ifMobile: StyleSelector = styles => css`
	@media only screen and (max-width: 768px) {
		${styles}
	}
`
