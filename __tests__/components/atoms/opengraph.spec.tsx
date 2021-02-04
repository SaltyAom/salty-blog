import { render } from '@testing-library/react'

import { OpenGraph } from '@components/atoms'

import { query } from '@services/tests'
import { web } from '@services/constant'

jest.mock('next/head', () => (props: any) => <div {...props} />)

const props = {
    title: 'title',
    description: 'description',
    image: 'image.jpg'
}

describe('components/atoms - Open Graph', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<OpenGraph {...props} />)

        expect(baseElement).toBeTruthy()
    })

    it('contains title tag', () => {
        const { getByText } = render(<OpenGraph {...props} />)

        expect(getByText('title')).toBeTruthy()
    })

    it('contains title', () => {
        const { container } = render(<OpenGraph {...props} />)

        expect(query(container, 'name', 'title')).toHaveAttribute(
            'content',
            'title'
        )
    })

    it('contains description', () => {
        const { container } = render(<OpenGraph {...props} />)

        expect(query(container, 'name', 'description')).toHaveAttribute(
            'content',
            'description'
        )
    })

    it('contains canonical', () => {
        const { container } = render(<OpenGraph {...props} />)

        expect(query(container, 'rel', 'canonical')).toHaveAttribute(
            'href',
            web
        )
    })

    it('can disable structured data', () => {
        const { container } = render(<OpenGraph disableGraph {...props} />)

        expect(query(container, 'type', 'application/ld+json')).toBeFalsy()
    })
})
