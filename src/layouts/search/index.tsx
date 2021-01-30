import Head from 'next/head'

// @ts-ignore
import FeatherIcon from 'feather-icons-react'

import styles from './search-layout.module.sass'

import { SearchLayoutComponent } from './types'

const SearchLayout: SearchLayoutComponent = ({ children, onSearch }) => (
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
                            <FeatherIcon icon="search" size="24" />
                        </button>
                    </div>
                </form>
            </header>
            <main className="flex flex-col w-full">{children}</main>
        </section>
    </>
)

export default SearchLayout
