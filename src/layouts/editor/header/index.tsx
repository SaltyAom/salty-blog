import NextImage from 'next/image'

import tw from '@tailwind'

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
    <header
        className={tw`flex flex-col items-center mt-8 sm:mt-12 mb-4 mx-auto px-4 pt-8`}
    >
        <figure
            className={`${styles.profile} ${tw(
                'bg-preload dark:bg-preload-dark rounded-full overflow-hidden'
            )}`}
        >
            <NextImage
                src={`/editor/${slug}/${image}`}
                width={172}
                height={172}
                objectFit="cover"
                quality={100}
            />
        </figure>
        <h1
            className={tw`mt-8 mb-2 text-4xl text-gray-700 dark:text-gray-100 font-semibold`}
        >
            {name}
        </h1>
        <h2
            className={`${styles.bio} ${tw(
                'my-2 text-lg sm:text-xl text-gray-600 dark:text-gray-200 font-normal text-center capitalize w-full whitespace-pre-wrap'
            )}`}
        >
            {bio}
        </h2>
        {socials.length ? (
            <ul className={tw`list-none pl-0 w-full`}>
                {socials.map(({ social, user, link }) => (
                    <li
                        key={social}
                        className={tw`text-gray-600 dark:text-gray-300 text-center capitalize`}
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
