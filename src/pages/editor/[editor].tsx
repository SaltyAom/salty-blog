import { FunctionComponent } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import tw from '@tailwind'

import { Metadata } from '@contents'
import metadataList from '@contents/list'
import { reduceMetadata } from '@blog/services'

import { Author, authors } from '@authors'

import EditorLayout from '@layouts/editor'

import { Post } from '@components/organisms'

import { generateBlurhashMap } from '@services/blurhash/server'
import { BlurhashMap, BlurhashProvider } from '@services/blurhash'

interface EditorPageProps {
    author: Author
    contents: Metadata[]
    blurhashMap: BlurhashMap
}

type EditorPageComponent = FunctionComponent<EditorPageProps>

const EditorPage: EditorPageComponent = ({ author, contents, blurhashMap }) => (
    <BlurhashProvider value={blurhashMap}>
        <EditorLayout {...author}>
            <h1
                className={tw`text-gray-400 dark:text-gray-400 text-2xl ml-2 font-medium my-0`}
            >
                Written by {author.name}
            </h1>
            {contents.map((content) => (
                <Post {...content} />
            ))}
        </EditorLayout>
    </BlurhashProvider>
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
        metadataList
            .filter((metadata) => metadata.author.slug === editor)
            .reverse() || []

    return {
        props: {
            author,
            contents,
            blurhashMap: await generateBlurhashMap({
                recommended: contents.map(reduceMetadata)
            })
        }
    }
}

export default EditorPage
