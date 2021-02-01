import { Share } from 'react-feather'

import { Button, Link } from '@components/atoms'
import { Post } from '@components/organisms'
import { WrittenBy } from '@components/molecules'

import { isServer } from '@services'

import BlogHeader from './header'
import OpenGraph from './opengraph'

import { BlogLayoutComponent } from './types'

import styles from './blog.module.sass'

const BlogLayout: BlogLayoutComponent = ({
    metadata,
    children,
    recommended
}) => {
    let share = () => {
        if ('share' in navigator) {
            navigator.share({
                title: metadata.title,
                // eslint-disable-next-line no-restricted-globals
                url: `${location.host}/content/${metadata.slug}`
            })
        }
    }

    return (
        <>
            <OpenGraph {...metadata} />
            <main
                className={`${styles['blog-layout']} w-full py-4 px-6 mt-10 mb-4 sm:my-8 mx-auto`}
            >
                <BlogHeader {...metadata} />
                {children}
                <footer className="flex flex-col my-4">
                    {!isServer && 'share' in navigator && (
                        <section className="my-2">
                            <Button className="px-4 py-1" onClick={share}>
                                <Share className="mr-1" size={18} />
                                Share
                            </Button>
                        </section>
                    )}

                    <section className="my-2">
                        <WrittenBy
                            author={metadata.author}
                            prefix="Written by"
                        />
                    </section>

                    <section className="mb-4">
                        {metadata.tags.map((tag) => (
                            <Link
                                href={`/search?q=${encodeURI(tag)}`}
                                className="bg-gray-100 dark:bg-preload-dark text-base sm:text-lg px-3 py-1 capitalize mr-1 mb-1"
                            >
                                {tag}
                            </Link>
                        ))}
                    </section>
                    {recommended.map((post) => (
                        <Post {...post} />
                    ))}
                </footer>
            </main>
        </>
    )
}

export default BlogLayout
