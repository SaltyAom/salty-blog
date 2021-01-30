import { FunctionComponent } from 'react'

import { LinkProps as NextLinkProps } from 'next/link'

export interface LinkProps extends NextLinkProps {
    className?: string
    color?: string
    target?: string
}

export type LinkComponent = FunctionComponent<LinkProps>
