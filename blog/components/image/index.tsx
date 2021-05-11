import dynamic from 'next/dynamic'

import { Blurhash } from 'react-blurhash'

import { useBlurhashMap } from '@services/blurhash'

import { MarkdownImageComponent } from './types'

import styles from '../component.module.sass'

const Image = dynamic(() => import('next/image'))

const MarkdownImage: MarkdownImageComponent = (image) => {
    let { src, alt } = image

    if (!alt.includes(' | ')) throw new Error(`Dimension of ${src} is missing`)

    let [dimension, altMessage] = alt.split(' | ')
    let [width, height] = dimension.split('x')

    let isPng = src.endsWith('.png') || src.endsWith('.gif') ? styles.png : ''

    let blurhashMap = useBlurhashMap()
    let blurhash = blurhashMap[src]

    return (
        <figure className={`${isPng} ${styles.figure}`}>
            <Image
                src={`/content/${src}`}
                alt={altMessage}
                width={width}
                height={height}
                layout="responsive"
                quality={90}
            />
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

export default MarkdownImage
