import { FunctionComponent } from 'react'

import { BlurhashMap } from '@services/blurhash'

export interface SearchLayoutProps {
    // eslint-disable-next-line no-unused-vars
    onSearch: (value: string) => void
    blurhashMap: BlurhashMap
}

export type SearchLayoutComponent = FunctionComponent<SearchLayoutProps>
