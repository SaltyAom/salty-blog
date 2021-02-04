import { render } from '@testing-library/react'

import { Button } from '@components/atoms'

describe('components/atoms - Button', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<Button />)

        expect(baseElement).toBeTruthy()
    })

    it('contains text', () => {
        const { getByText } = render(<Button>Hello</Button>)

        expect(getByText('Hello')).toBeTruthy()
    })

    it('contains element', () => {
        const { getByTestId } = render(
            <Button>
                <div data-testid="div" />
            </Button>
        )

        expect(getByTestId('div')).toBeTruthy()
    })

    it('contains className', () => {
        const { container } = render(<Button className="hello" />)

        expect(container.firstChild).toHaveClass('hello')
    })
})
