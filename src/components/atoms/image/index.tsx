import NextImage from 'next/image'

import { Blurhash } from 'react-blurhash'

import tw from '@tailwind'

import { useBlurhashMap } from '@services/blurhash'

import styles from './image.module.sass'

import { ImageComponent } from './types'

const getBlurhashKey = (src: string) => {
    let paths = src.split('/')

    let title = paths[paths.length - 2]
    let file = paths[paths.length - 1]

    return `${title}/${file}`
}

const Image: ImageComponent = ({ className = '', ...imageProps }) => {
    let blurhashMap = useBlurhashMap()
    let blurhash = blurhashMap[getBlurhashKey(imageProps.src)]

    return (
        <figure
            className={`${tw(
                'relative bg-preload dark:bg-preload-dark rounded-sm overflow-hidden mx-0 my-2'
            )} ${className} ${styles.figure}`}
        >
            <NextImage {...imageProps} className={tw`z-20`} />
            {blurhash &&
            typeof blurhash !== 'undefined' &&
            typeof blurhash.hash !== 'undefined' ? (
                <Blurhash
                    className={styles.blurhash}
                    hash={blurhash.hash}
                    width={blurhash.width}
                    height={blurhash.height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />
            ) : null}
        </figure>
    )
}

export default Image
