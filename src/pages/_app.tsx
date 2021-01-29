import { useEffect } from 'react'

import { AppProps } from 'next/app'

import { AppLayout } from '@layouts'

import '@styles/init.sass'
import '@styles/tailwind.sass'

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })
    }, [])

    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    )
}

export default App
