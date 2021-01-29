import { FunctionComponent } from 'react'

import NextImage from 'next/image'

import { Link } from '@components/atoms'

import { Author } from '@authors'

import styles from './user-badge.module.sass'

const UserBadge: FunctionComponent<Author> = (author) => (
    <Link className="align-middle mb-1" href={`/editor/${author.slug}`}>
        <div className={`${styles.image} bg-gray-300 dark:bg-gray-700 ml-1 mr-2 overflow-hidden`}>
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
