import { FunctionComponent } from 'react'

import { GetStaticProps } from 'next'

import { Metadata } from '@contents'
import metadataList from '@contents/list'

import { Post } from '@components/organisms'
import LandingLayout from '@layouts/landing'

interface Blogs {
    blogs: Metadata[]
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
        blogs: metadataList
    }
})

export default Landing
