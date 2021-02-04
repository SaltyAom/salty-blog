import Landing, { getStaticProps, Blogs } from '@pages/index'

import { render } from '@testing-library/react'

interface BlogProps {
    props: Blogs
}

describe('pages/index', () => {
    it('renders without crash', async () => {
        let { props } = (await getStaticProps({})) as BlogProps

        const { baseElement } = render(<Landing {...props} />)

        expect(baseElement).toBeTruthy()
    })

    it('renders Post', async () => {
        let props: Blogs = {
            blogs: [
                {
                    title: 'Hello Blog',
                    slug: 'hello-world',
                    image: {
                        src: 'hello-world.jpg',
                        dimension: {
                            width: 1920,
                            height: 1080
                        }
                    },
                    author: {
                        name: 'SaltyAom',
                        slug: '/saltyaom',
                        image: 'saltyaom.jpg'
                    },
                    time: {
                        created: '2021-2-2 13:00'
                    }
                }
            ]
        }

        const { getByText } = render(<Landing {...props} />)

        expect(getByText(/Hello Blog/)).toBeTruthy()
    })
})
