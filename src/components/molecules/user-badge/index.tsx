import { FunctionComponent } from 'react'

import NextImage from 'next/image'

import { Link } from '@components/atoms'

import { Author, ReducedAuthor } from '@authors'

import styles from './user-badge.module.sass'

const UserBadge: FunctionComponent<Author | ReducedAuthor> = (author) => (
    <Link
        className="align-middle mb-1"
        href="/editor/[editor]"
        as={`/editor/${author.slug}`}
    >
        <div
            className={`${styles.image} bg-preload dark:bg-preload-dark ml-1 mr-2 overflow-hidden`}
        >
            <NextImage
                src={`/editor/${author.slug}/${author.image}`}
                alt={`${author.name}'s profile image`}
                width={28}
                height={28}
            />
        </div>
        {author.name}
    </Link>
)

export default UserBadge
