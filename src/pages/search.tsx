/* eslint-disable global-require */
import { useCallback, useState, FormEvent, useRef, useEffect } from 'react'

import NextImage from 'next/image'

import { Metadata } from '@contents'

import { SearchLayout } from '@layouts'
import { Post } from '@components/molecules'

import { get } from '@services'

import IFuse from 'fuse.js'

const Search = () => {
    let [searchResult, updateSearchResult] = useState<Metadata[] | null>(null)
    let fuse = useRef<IFuse<Metadata>>()

    useEffect(() => {
        let createEngine = async () => {
            let metadataList = await get<Metadata[]>('/api/editor')
            let { default: Fuse } = await require('fuse.js')

            let engine: IFuse<Metadata> = new Fuse(metadataList, {
                keys: ['title', 'slug', 'author.name', 'summary']
            })

            fuse.current = engine
        }

        createEngine()
    }, [])

    let onSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let searchBox = event.currentTarget[0] as HTMLInputElement
        let { value: searchKey } = searchBox

        if (!fuse.current) return

        let result = fuse.current?.search(searchKey).map(({ item }) => item)

        updateSearchResult(result)
    }, [])

    if (!searchResult) return <SearchLayout onSearch={onSearch} />

    if (!searchResult.length)
        return (
            <SearchLayout onSearch={onSearch}>
                <a
                    className="block mx-auto my-4"
                    target="_blank"
                    href="https://walfiegif.files.wordpress.com"
                    rel="noreferrer noreopener"
                >
                    <img
                        src="https://walfiegif.files.wordpress.com/2020/12/out-transparent-23.gif?w=371&h=458"
                        alt="fbk"
                        className="w-full object-contain"
                        style={{
                            maxWidth: 300
                        }}
                    />
                </a>
                <h1 className="text-gray-500 mx-auto px-2 text-3xl font-medium">
                    Not Found
                </h1>
            </SearchLayout>
        )

    return (
        <SearchLayout onSearch={onSearch}>
            <h1 className="text-gray-500 dark:text-gray-400 mx-2 my-0 font-medium">
                Found {searchResult.length} post
            </h1>
            {searchResult.map((content) => (
                <Post {...content} />
            ))}
        </SearchLayout>
    )
}

export default Search
