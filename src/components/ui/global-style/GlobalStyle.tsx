import { css, Global } from '@emotion/react'
import { colors, fonts, fontWeights, margins, paddings, spacings, widths } from './variables'
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
				}

				body {
					font-family: 'Lato', sans-serif;
					${SizeVars};
					${spacings};
					${colors};
					${fonts};
					${margins};
					${widths};
					${paddings};
					${fontWeights};
				}
			`}
		/>
	</>
)
