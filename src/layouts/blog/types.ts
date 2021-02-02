import { FunctionComponent } from 'react'

import { Metadata, ReducedMetadata } from '@blog/contents'

interface BlogLayoutProps {
    metadata: Metadata
    recommended: ReducedMetadata[]
}

export type BlogLayoutComponent = FunctionComponent<BlogLayoutProps>
