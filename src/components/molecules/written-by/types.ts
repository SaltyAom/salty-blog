import { FunctionComponent } from 'react'

import { Metadata } from '@contents'
import { Author, ReducedAuthor } from '@authors'

export interface WrittenByProps {
    prefix?: string
    author: Author | ReducedAuthor
    created?: Metadata['time']['created']
    showDate?: boolean
}

export type WrittenByComponent = FunctionComponent<WrittenByProps>
