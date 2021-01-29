import { FunctionComponent } from 'react'

export interface MarkdownImageProps {
    src: string
    alt: string
}

export type MarkdownImageComponent = FunctionComponent<MarkdownImageProps>
