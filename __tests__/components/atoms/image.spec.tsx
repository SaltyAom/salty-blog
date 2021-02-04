import { render } from '@testing-library/react'

import { Image } from '@components/atoms'

const props = { src: '/hello.jpg', width: 1, height: 1 }

describe('components/atoms - Image', () => {
    it('renders without crash', () => {
        const { baseElement } = render(<Image {...props} />)

        expect(baseElement).toBeTruthy()
    })

    it('contains className', () => {
        const { container } = render(<Image className="hello" {...props} />)

        expect(container.firstChild).toHaveClass('hello')
    })
})
