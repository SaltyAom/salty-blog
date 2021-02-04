/* eslint-disable global-require */
import { useEffect } from 'react'

import { AppProps } from 'next/app'

import { AppLayout } from '@layouts'

import '@styles/init.sass'
import '@styles/tailwind.sass'
import '@styles/prism.css'

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        GA_INITIALIZED: boolean
    }
}

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, {
            passive: true
        })

        let loadAnalytic = async () => {
            let { initGA, logPageView } = await require('@services/analytics')
            let { useRouter } = await require('next/router')

            if (!window.GA_INITIALIZED) {
                initGA()
                window.GA_INITIALIZED = true
            }

            logPageView()

            let router = useRouter()

            router.events.on('routeChangeComplete', logPageView)
        }

        if (process.env.NODE_ENV === 'production') loadAnalytic()
    }, [])

    return (
        // <StoreContext.Provider value={store}>
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
        // </StoreContext.Provider>
    )
}

export default App
