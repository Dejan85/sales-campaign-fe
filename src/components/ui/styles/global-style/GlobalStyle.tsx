import { css, Global } from '@emotion/react'
import {
	borders,
	colors,
	fonts,
	fontsSizes,
	fontWeights,
	gap,
	letterSpacings,
	lineHeights,
	margins,
	paddings,
	widths
} from './variables'
import { SizeVars } from './variables/variables'

export const globalStyles = (
	<>
		<Global
			styles={css`
				@font-face {
					font-family: 'Epilogue', sans-serif;
					font-style: normal;
					font-weight: normal;
					font-display: swap;
				}
				@font-face {
					font-family: 'Lato', sans-serif;
					font-style: normal;
					font-weight: normal;
					font-display: swap;
				}
			`}
		/>
		<Global
			styles={css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}

				body {
					font-family: 'Lato', sans-serif;
					${SizeVars};
					${colors};
					${widths};
					${margins};
					${paddings};
					${gap};
					${fonts};
					${fontsSizes};
					${fontWeights};
					${letterSpacings};
					${lineHeights};
					${borders};
				}
			`}
		/>
	</>
)
