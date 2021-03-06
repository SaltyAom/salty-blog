import { FunctionComponent } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import Fuse from 'fuse.js'

import { BlogLayout } from '@layouts'

import components from '@blog/components'
import { reduceMetadata } from '@blog/services'

import { BlurhashProvider, BlurhashMap } from '@services/blurhash'
import { generateBlurhashMap } from '@services/blurhash/server'

import metadatas, { Metadata, getContent, ReducedMetadata } from '@contents'
import metadataList from '@contents/list'

export interface BlogContent extends Metadata {
    source: MDXRemoteSerializeResult
}

export interface Blog {
    content: BlogContent
    recommended: ReducedMetadata[]
    blurhashMap: BlurhashMap
}

const BlogPage: FunctionComponent<Blog> = ({
    content,
    recommended,
    blurhashMap
}) => {
    let { source, ...metadata } = content

    return (
        <BlurhashProvider value={blurhashMap}>
            <BlogLayout metadata={metadata} recommended={recommended}>
                <MDXRemote {...source} components={components} />
            </BlogLayout>
        </BlurhashProvider>
    )
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: Object.keys(metadatas).map((content) => `/content/${content}`),
    fallback: false
})

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
    let title = context.params?.content as string

    let metadata = metadatas[title]
    let source = await getContent(title)

    let engine = new Fuse(metadataList, {
        keys: ['tags', 'title', 'slugs', 'author.name', 'summary']
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
                source
            },
            recommended,
            blurhashMap: await generateBlurhashMap({ title, recommended })
        }
    }
}

export default BlogPage
