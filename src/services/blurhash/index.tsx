import { createContext, useContext } from 'react'

import { BlurhashMap, BlurhashMapProviderComponent } from './types'

export const blurhashContext = createContext<BlurhashMap>({})

export const BlurhashProvider: BlurhashMapProviderComponent = ({
    children,
    value
}) => (
    <blurhashContext.Provider value={value}>
        {children}
    </blurhashContext.Provider>
)

export type { BlurhashMap } from './types'

export const useBlurhashMap = () => useContext(blurhashContext)
