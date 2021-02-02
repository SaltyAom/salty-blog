import { FunctionComponent } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import Fuse from 'fuse.js'

import { BlogLayout } from '@layouts'

import components from '@blog/components'
import { reduceMetadata } from '@blog/services'

import metadatas, { Metadata, getContent, ReducedMetadata } from '@contents'
import metadataList from '@contents/list'

import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'

import { isServer } from '@services'

export interface BlogContent extends Metadata {
    Content: MdxRemote.Source
}

export interface Blog {
    content: BlogContent
    recommended: ReducedMetadata[]
}

const Container: FunctionComponent = ({ children }) => (
    <div key="blog">{children}</div>
)

const BlogPage: FunctionComponent<Blog> = ({ content, recommended }) => {
    let { Content, ...metadata } = content

    let hydrated = hydrate(Content, { components })

    let ContentComponent = !isServer ? (
        <Container>{hydrated}</Container>
    ) : (
        hydrated
    )

    return (
        <BlogLayout metadata={metadata} recommended={recommended}>
            {ContentComponent}
        </BlogLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: Object.keys(metadatas).map((content) => `/content/${content}`),
    fallback: false
})

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
    let title = context.params?.content as string

    let metadata = metadatas[title]
    let Content = await getContent(title)

    let engine = new Fuse(metadataList, {
        keys: ['title', 'slugs', 'tags', 'author.name', 'summary']
    })

    let recommended = engine
        .search(
            {
                $or: [
                    ...metadata.tags.map((tag) => ({
                        tags: tag
                    })),
                    {
                        name: metadata.title
                    },
                    {
                        'author.name': metadata.author.name
                    }
                ]
            },
            {
                limit: 4
            }
        )
        .map(({ item }) => reduceMetadata(item))
        .filter((post) => post.slug !== metadata.slug)

    return {
        props: {
            content: {
                ...metadata,
                Content
            },
            recommended
        }
    }
}

export default BlogPage
