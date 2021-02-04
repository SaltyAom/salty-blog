import App from '@pages/_app'

import { render } from '@testing-library/react'

describe('pages/_app', () => {
    it('renders without crash', async () => {
        const { baseElement } = render(
            // @ts-ignore
            <App />
        )

        expect(baseElement).toBeTruthy()
    })
})
