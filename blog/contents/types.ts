/* eslint-disable no-unused-vars */
import { Author, ReducedAuthor } from '@authors'

export interface MetaImage {
    src: string
    dimension: {
        width: number
        height: number
    }
}

export interface MetaTime {
    created: string
    createdWithTime: string
    modified?: string
    modifiedWithTime?: string
}

export interface Metadata {
    title: string
    summary: string
    slug: string
    author: Author
    image: MetaImage
    tags: string[]
    time: MetaTime
}

export type Metadatas = Record<string, Metadata>

/**
 * This is used on landing page
 */
export interface ReducedMetadata
    extends Pick<Metadata, 'title' | 'slug' | 'image'> {
    author: ReducedAuthor
    time: Pick<MetaTime, 'created'>
}
