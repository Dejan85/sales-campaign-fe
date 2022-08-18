import styled from '@emotion/styled'

import { primary } from './Article.themes'

interface ArticleI {
	theme: 'primary'
}

const styles = { primary }
export const Article = styled.article(({ theme }: ArticleI) => styles[theme])
