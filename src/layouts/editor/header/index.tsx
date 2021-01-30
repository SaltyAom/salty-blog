import NextImage from 'next/image'

import { Link } from '@components/atoms'

import { EditorLayoutComponent } from '../types'

import styles from './editor.module.sass'

const EditorHeader: EditorLayoutComponent = ({
    name,
    slug,
    image,
    bio,
    socials
}) => (
    <header className="flex flex-col items-center mt-8 sm:mt-12 mb-4 mx-auto px-4 pt-8">
        <figure className={`${styles.profile} bg-preload dark:bg-preload-dark rounded-full overflow-hidden`}>
            <NextImage
                src={`/editor/${slug}/${image}`}
                width={172}
                height={172}
                objectFit="cover"
                quality={100}
            />
        </figure>
        <h1 className="mt-8 mb-2 text-4xl text-gray-700 dark:text-gray-100 font-semibold">
            {name}
        </h1>
        <h2
            className={`${styles.bio} my-2 text-lg sm:text-xl text-gray-600 dark:text-gray-200 font-normal text-center capitalize w-full whitespace-pre-wrap`}
        >
            {bio}
        </h2>
        {socials.length ? (
            <ul className="list-none pl-0 w-full">
                {socials.map(({ social, user, link }) => (
                    <li
                        key={social}
                        className="text-gray-600 dark:text-gray-300 text-center capitalize"
                    >
                        {social}:{' '}
                        <Link target="blank" href={link}>
                            {user}
                        </Link>
                    </li>
                ))}
            </ul>
        ) : null}
    </header>
)

export default EditorHeader
