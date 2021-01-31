import { FunctionComponent } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import { BlogLayout } from '@layouts'

import components from '@blog/components'
import contents, { Metadata, getContent } from '@contents'

import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'

export interface BlogContent extends Metadata {
    Content: MdxRemote.Source
}

export interface Blog {
    content: BlogContent
}

const BlogPage: FunctionComponent<Blog> = ({ content }) => {
    let { Content, ...metadata } = content

    let ContentComponent = hydrate(Content, {
        components
    })

    return <BlogLayout {...metadata}>{ContentComponent}</BlogLayout>
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: Object.keys(contents).map((content) => `/content/${content}`),
    fallback: false
})

export const getStaticProps: GetStaticProps<Blog> = async (context) => {
    const title = context.params?.content as string

    const metadata = contents[title]
    const Content = await getContent(title)

    return {
        props: {
            content: {
                ...metadata,
                Content
            }
        }
    }
}

export default BlogPage
