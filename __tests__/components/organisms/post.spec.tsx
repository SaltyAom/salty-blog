import { render } from '@testing-library/react'

import { ReducedMetadata } from '@contents'

import { Post } from '@components/organisms'

jest.mock('@components/atoms/image', () => (props: any) => (
    <div data-testid="image" {...props} />
))

jest.mock('@components/molecules/written-by', () => (props: any) => (
    <div data-testid="written-by" {...props} />
))

let props: ReducedMetadata = {
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
        slug: 'saltyaom',
        image: 'saltyaom.jpg'
    },
    time: {
        created: '2021-2-2 13:00'
    }
}

describe('components/organism - Post', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<Post {...props} />)

        expect(baseElement).toBeTruthy()
    })

    it('contains title', () => {
        const { getByText } = render(<Post {...props} />)

        expect(getByText(/Hello Blog/)).toBeTruthy()
    })

    it('contains image', async () => {
        const { getByTestId } = render(<Post {...props} />)

        expect(getByTestId('image')).toBeTruthy()
    })

    it('contains link', async () => {
        const { container } = render(<Post {...props} />)

        expect(container.firstChild).toHaveAttribute(
            'href',
            `/content/hello-world`
        )
    })

    it('renders Written By', async () => {
        const { getByTestId } = render(<Post {...props} />)

        expect(getByTestId('written-by')).toBeTruthy()
    })
})
