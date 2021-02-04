import { render } from '@testing-library/react'

import { WrittenBy } from '@components/molecules'
import { WrittenByProps } from '@components/molecules/written-by/types'

const props: WrittenByProps = {
    author: {
        name: 'SaltyAom',
        slug: 'saltyaom',
        image: 'saltyaom.jpg'
    }
}

describe('components/molecules - Written By', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<WrittenBy {...props} />)

        expect(baseElement).toBeTruthy()
    })

    it('contains prefix', () => {
        const { getByText } = render(
            <WrittenBy prefix="Written by" {...props} />
        )

        expect(getByText('Written by')).toBeTruthy()
    })

    it('contains date', () => {
        const { getByText } = render(
            <WrittenBy showDate created="2021-2-2" {...props} />
        )

        expect(getByText('On 2021-2-2')).toBeTruthy()
    })
})
