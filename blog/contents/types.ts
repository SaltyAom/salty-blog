/* eslint-disable no-unused-vars */
import { Author } from '@authors'

export interface MetaImage {
    src: string
    dimension: {
        width: number
        height: number
    }
}

export interface MetaTime {
    created: string
    modified?: string
}

export interface Metadata {
    title: string
    summary: string
    slug: string
    author: Author
    image: MetaImage
    time: MetaTime
}

export type Metadatas = Record<string, Metadata>
