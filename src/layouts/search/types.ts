import { FormEvent, FunctionComponent } from 'react'

export interface SearchLayoutProps {
    // eslint-disable-next-line no-unused-vars
    onSearch: (value: string) => void
}

export type SearchLayoutComponent = FunctionComponent<SearchLayoutProps>
