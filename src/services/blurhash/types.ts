import { FunctionComponent } from 'react'

import { Blurhash } from '@plaiceholder/blurhash'

export type BlurhashMap = Record<string, Blurhash>

export interface BlurhashMapProviderProps {
    value: BlurhashMap
}

export type BlurhashMapProviderComponent =
    FunctionComponent<BlurhashMapProviderProps>
