import { useEffect } from 'react'

// import { StoreContext } from 'storeon/react'
// import store from '@models'

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
        // <StoreContext.Provider value={store}>
            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        // </StoreContext.Provider>
    )
}

export default App
