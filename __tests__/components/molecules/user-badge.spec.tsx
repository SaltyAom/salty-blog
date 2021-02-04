import { render } from '@testing-library/react'

import { UserBadge } from '@components/molecules'
import { ReducedAuthor } from '@blog/authors'

jest.mock('next/image', () => (props: any) => (
    <img data-testid="image" {...props} />
))

const props: ReducedAuthor = {
    name: 'SaltyAom',
    slug: 'saltyaom',
    image: 'saltyaom.jpg'
}

describe('components/molecules - User Badge', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<UserBadge {...props} />)

        expect(baseElement).toBeTruthy()
    })

    it('contains name', () => {
        const { getByText } = render(<UserBadge {...props} />)

        expect(getByText('SaltyAom')).toBeTruthy()
    })

    it('contains link', () => {
        const { container } = render(<UserBadge {...props} />)

        expect(container.firstChild).toHaveAttribute('href', '/editor/saltyaom')
    })

    it('contains image', () => {
        const { getByTestId } = render(<UserBadge {...props} />)

        expect(getByTestId('image')).toHaveAttribute(
            'src',
            '/editor/saltyaom/saltyaom.jpg'
        )
    })
})
