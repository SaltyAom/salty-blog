import dynamic from 'next/dynamic'

import MarkdownImage from './image'
import MarkdownLink from './link'
import MarkdownPre from './pre'

const MarkdownCode = dynamic(() => import('./code'))

const components = {
    a: MarkdownLink,
    img: MarkdownImage,
    code: MarkdownCode,
    pre: MarkdownPre
}

export type { MarkdownLinkProps, MarkdownLinkComponent } from './link/types'
export type { MarkdownCodeProps, MarkdownCodeComponent } from './code/types'
export type { MarkdownImageProps, MarkdownImageComponent } from './image/types'

export { MarkdownImage, MarkdownLink, MarkdownCode }

export default components
