import dynamic from 'next/dynamic'

import { MarkdownImageComponent } from './types'

import styles from '../component.module.sass'

const Image = dynamic(() => import('next/image'))

const MarkdownImage: MarkdownImageComponent = (image) => {
    let { src, alt } = image

    if (!alt.includes(' | ')) throw new Error(`Dimension of ${src} is missing`)

    let [dimension, altMessage] = alt.split(' | ')
    let [width, height] = dimension.split('x')

    let isPng = src.endsWith('.png') || src.endsWith('.gif') ? styles.png : ''

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
        </figure>
    )
}

export default MarkdownImage
