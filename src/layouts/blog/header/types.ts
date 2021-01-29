import { FunctionComponent } from 'react'

import { Metadata } from '@blog/contents'

export type BlogHeaderProps = Pick<
    Metadata,
    'title' | 'author' | 'slug' | 'image' | 'time'
>

export type BlogHeaderComponent = FunctionComponent<BlogHeaderProps>
