import { ReactElement, FunctionComponent } from 'react'

export interface MarkdownLinkProps {
    href: string
    children: ReactElement | string
}

export type MarkdownLinkComponent = FunctionComponent<MarkdownLinkProps>
