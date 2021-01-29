import { FunctionComponent } from 'react'

export interface MarkdownCodeProps {
    children: string
    class?: string
    className?: string
}

export type MarkdownCodeComponent = FunctionComponent<MarkdownCodeProps>
