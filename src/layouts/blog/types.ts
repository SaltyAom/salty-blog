import { FunctionComponent } from 'react'

import { Metadata } from '@blog/contents'

interface BlogLayoutProps {
    metadata: Metadata
    recommended: Metadata[]
}

export type BlogLayoutComponent = FunctionComponent<BlogLayoutProps>
