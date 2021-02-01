import dynamic from 'next/dynamic'

import { h1, h2, h3, h4, h5, h6, p, strong } from './text'
import MarkdownImage from './image'
import MarkdownLink from './link'
import MarkdownPre from './pre'
import { ul, li } from './list'

const MarkdownCode = dynamic(() => import('./code'))

const components = {
    a: MarkdownLink,
    img: MarkdownImage,
    code: MarkdownCode,
    pre: MarkdownPre,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    li,
    strong
}

export type { MarkdownLinkProps, MarkdownLinkComponent } from './link/types'
export type { MarkdownCodeProps, MarkdownCodeComponent } from './code/types'
export type { MarkdownImageProps, MarkdownImageComponent } from './image/types'

export { MarkdownImage, MarkdownLink, MarkdownCode }

export default components
