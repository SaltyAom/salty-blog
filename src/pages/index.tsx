import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { ReducedMetadata } from '@contents'
import metadataList from '@contents/list'

import { Post } from '@components/organisms'
import LandingLayout from '@layouts/landing'

import { reduceMetadata } from '@blog/services'

import { BlurhashMap, BlurhashProvider } from '@services/blurhash'
import { generateBlurhashMap } from '@services/blurhash/server'

export interface Blogs {
    blogs: ReducedMetadata[]
    blurhashMap: BlurhashMap
}

const Landing: FunctionComponent<Blogs> = ({ blogs, blurhashMap }) => (
    <BlurhashProvider value={blurhashMap}>
        <LandingLayout>
            {blogs.map((content) => (
                <Post {...content} />
            ))}
        </LandingLayout>
    </BlurhashProvider>
)

export const getStaticProps: GetStaticProps<Blogs> = async () => {
    let blogs = [...metadataList].reverse().map(reduceMetadata)

    return {
        props: {
            blogs,
            blurhashMap: await generateBlurhashMap({ recommended: blogs })
        }
    }
}

export default Landing
