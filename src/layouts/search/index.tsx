import Head from 'next/head'
import { useEffect, useRef } from 'react'

import { Search as SearchIcon } from 'react-feather'

import styles from './search-layout.module.sass'

import { SearchLayoutComponent } from './types'

const SearchLayout: SearchLayoutComponent = ({ children, onSearch }) => {
    let searchBar = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!searchBar.current) return

        searchBar.current.focus()
    }, [])

    return (
        <>
            <Head>
                <title>Search</title>
            </Head>
            <section
                className={`${styles['search-layout']} flex flex-col w-full mb-6 px-4 mx-auto`}
            >
                <header
                    className={`${styles['search-container']} flex flex-col w-full justify-center mx-auto px-2`}
                >
                    <p className="text-gray-300 dark:text-gray-400 m-0 mb-1">
                        Search
                    </p>
                    <form onSubmit={onSearch} className="w-full">
                        <div
                            className={`${styles['search-box']} flex flex-row bg-system dark:bg-preload-dark w-full rounded overflow-hidden`}
                        >
                            <label
                                className="flex flex-row flex-1 pl-1"
                                htmlFor="search"
                            >
                                <span className="hidden">Search</span>
                                <input
                                    // eslint-disable-next-line jsx-a11y/no-autofocus
                                    autoFocus
                                    ref={searchBar}
                                    className={`${styles.search} appearance-none text-2xl text-gray-600 dark:text-gray-200 py-2 pl-4 bg-transparent border-0 outline-none`}
                                    name="search"
                                    type="text"
                                    placeholder="Awesome Story"
                                    autoComplete="off"
                                    enterKeyHint="search"
                                />
                            </label>
                            <button
                                className={`${styles['search-submit']} justify-center items-center appearance-none text-2xl text-gray-400 pt-2 hover:text-blue-400 transition-colors bg-transparent border-0 outline-none cursor-pointer`}
                                type="submit"
                            >
                                <SearchIcon size="24" />
                            </button>
                        </div>
                    </form>
                </header>
                <main className="flex flex-col w-full">{children}</main>
            </section>
        </>
    )
}

export default SearchLayout
