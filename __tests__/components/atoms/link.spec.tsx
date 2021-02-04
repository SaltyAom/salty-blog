import { render } from '@testing-library/react'

import { Link } from '@components/atoms'

jest.mock('@tailwind', () => (value: string) => value)

describe('components/atoms - Link', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<Link href="/" />)

        expect(baseElement).toBeTruthy()
    })

    it('contains text', () => {
        const { getByText } = render(<Link href="/">Hello</Link>)

        expect(getByText('Hello')).toBeTruthy()
    })

    it('contains element', () => {
        const { getByTestId } = render(
            <Link href="/">
                <div data-testid="div" />
            </Link>
        )

        expect(getByTestId('div')).toBeTruthy()
    })

    it('contains className', () => {
        const { container } = render(<Link href="/" className="hello" />)

        expect(container.firstChild).toHaveClass('hello')
    })

    it('contains color', () => {
        const { container } = render(
            <Link href="/" color="text-blue-400" className="hello" />
        )

        expect(container.firstChild).toHaveClass('text-blue-400')
    })
})
