import { FormEvent, FunctionComponent } from 'react'

export interface SearchLayoutProps {
    // eslint-disable-next-line no-unused-vars
    onSearch: (event: FormEvent<HTMLFormElement>) => void
}

export type SearchLayoutComponent = FunctionComponent<SearchLayoutProps>
