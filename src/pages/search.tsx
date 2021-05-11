/* eslint-disable global-require */
import {
    useCallback,
    useState,
    useRef,
    useEffect,
    FunctionComponent
} from 'react'

import { GetStaticProps } from 'next'

import tw from '@tailwind'

import { SearchLayout } from '@layouts'
import { Post } from '@components/organisms'

import { Metadata } from '@contents'

import { get } from '@services'
import { BlurhashMap } from '@services/blurhash'
import { generateBlurhashMap } from '@services/blurhash/server'

import { reduceMetadata } from '@blog/services'
import metadata from '@blog/contents/list'

import IFuse from 'fuse.js'

interface SearchProps {
    blurhashMap: BlurhashMap
}

const Search: FunctionComponent<SearchProps> = ({ blurhashMap }) => {
    let [searchResult, updateSearchResult] = useState<Metadata[] | null>(null)
    let deferSearch = useRef('')

    let fuse = useRef<IFuse<Metadata>>()

    let onSearch = useCallback((searchKey: string) => {
        if (!fuse.current) {
            deferSearch.current = searchKey

            return
        }

        if (deferSearch.current) deferSearch.current = ''

        let result = fuse.current?.search(searchKey).map(({ item }) => item)

        window.history.pushState('', '', `/search?q=${encodeURI(searchKey)}`)

        updateSearchResult(result)
    }, [])

    useEffect(() => {
        let createEngine = async () => {
            let metadataList = await get<Metadata[]>('/api/metadata')
            let { default: Fuse } = await require('fuse.js')

            let engine: IFuse<Metadata> = new Fuse(metadataList, {
                keys: ['title', 'tags', 'author.name', 'summary']
            })

            fuse.current = engine

            if (deferSearch.current) onSearch(deferSearch.current)
        }

        createEngine()
    }, [])

    if (!searchResult)
        return <SearchLayout onSearch={onSearch} blurhashMap={blurhashMap} />

    if (!searchResult.length)
        return (
            <SearchLayout onSearch={onSearch} blurhashMap={blurhashMap}>
                <a
                    className={tw`block mx-auto my-4`}
                    target="_blank"
                    href="https://walfiegif.files.wordpress.com"
                    rel="noreferrer noreopener"
                >
                    <img
                        src="https://walfiegif.files.wordpress.com/2020/12/out-transparent-23.gif?w=371&h=458"
                        alt="fbk"
                        className={tw`w-full object-contain`}
                        style={{
                            maxWidth: 300
                        }}
                    />
                </a>
                <h1
                    className={tw`text-gray-500 mx-auto px-2 text-3xl font-medium`}
                >
                    Not Found
                </h1>
            </SearchLayout>
        )

    return (
        <SearchLayout onSearch={onSearch} blurhashMap={blurhashMap}>
            <h1
                className={tw`text-gray-500 dark:text-gray-400 mx-2 my-0 font-medium`}
            >
                Found {searchResult.length} post
            </h1>
            {searchResult.map((content) => (
                <Post {...content} />
            ))}
        </SearchLayout>
    )
}

export const getStaticProps: GetStaticProps<SearchProps> = async () => ({
    props: {
        blurhashMap: await generateBlurhashMap({
            recommended: metadata.map(reduceMetadata)
        })
    }
})

export default Search
