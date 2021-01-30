import { FunctionComponent } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import { Metadata } from '@contents'
import metadataList from '@contents/list'

import { Author, authors } from '@authors'

import EditorLayout from '@layouts/editor'

import { Post } from '@components/molecules'

interface EditorPageProps {
    author: Author
    contents: Metadata[]
}

type EditorPageComponent = FunctionComponent<EditorPageProps>

const EditorPage: EditorPageComponent = ({ author, contents }) => (
    <EditorLayout {...author}>
        <h1 className="text-gray-400 dark:text-gray-400 text-2xl ml-2 font-medium my-0">
            Written by {author.name}
        </h1>
        {contents.map((content) => (
            <Post {...content} />
        ))}
    </EditorLayout>
)

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: Object.keys(authors).map((author) => `/editor/${author}`),
    fallback: false
})

export const getStaticProps: GetStaticProps<EditorPageProps> = async (
    context
) => {
    const editor = context.params?.editor as string

    const author = authors[editor]

    const contents =
        metadataList.filter((metadata) => metadata.author.slug === editor) || []

    return {
        props: {
            author,
            contents
        }
    }
}

export default EditorPage
