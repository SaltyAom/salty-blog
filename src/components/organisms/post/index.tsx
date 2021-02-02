import { FunctionComponent } from 'react'

import NextLink from 'next/link'

import { Metadata, ReducedMetadata } from '@blog/contents'

import { Image } from '@components/atoms'
import { WrittenBy } from '@components/molecules'

import styles from './post.module.sass'

export const Post: FunctionComponent<Metadata | ReducedMetadata> = ({
    title,
    slug,
    author,
    image: {
        src,
        dimension: { width, height }
    },
    time: { created }
}) => (
    <NextLink href="/content/[content]" as={`/content/${slug}`}>
        <a className="mt-2 mb-4 no-underline">
            <article>
                <Image
                    className="mb-6 mx-2"
                    quality={75}
                    src={`/content/${slug}/${src}`}
                    width={width}
                    height={height}
                />
                <h3
                    className={`${styles.title} ml-2 my-2 text-3xl font-medium text-gray-700 dark:text-gray-200`}
                >
                    {title}
                </h3>
                <WrittenBy author={author} created={created} showDate />
            </article>
        </a>
    </NextLink>
)

export default Post
