import styled from '@emotion/styled'

import { primary, mainHeading, price, specialOffer, timer } from './Article.themes'

interface ArticleI {
	theme: 'primary' | 'mainHeading' | 'price' | 'specialOffer' | 'timer'
}

const styles = { primary, mainHeading, price, specialOffer, timer }
export const Article = styled.article(({ theme }: ArticleI) => styles[theme])
