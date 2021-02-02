import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { ReducedMetadata } from '@contents'
import metadataList from '@contents/list'

import { Post } from '@components/organisms'
import LandingLayout from '@layouts/landing'

import { reduceMetadata } from '@blog/services'

interface Blogs {
    blogs: ReducedMetadata[]
}

const Landing: FunctionComponent<Blogs> = ({ blogs }) => (
    <LandingLayout>
        {blogs.map((content) => (
            <Post {...content} />
        ))}
    </LandingLayout>
)

export const getStaticProps: GetStaticProps<Blogs> = async () => ({
    props: {
        blogs: metadataList.reverse().map(reduceMetadata)
    }
})

export default Landing
