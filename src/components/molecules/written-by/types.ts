import { Author } from '@blog/authors'
import { Metadata } from '@blog/contents'
import { FunctionComponent } from 'react'

export interface WrittenByProps {
    prefix?: string
    author: Author
    created: Metadata['time']['created']
    showDate?: boolean
}

export type WrittenByComponent = FunctionComponent<WrittenByProps>
