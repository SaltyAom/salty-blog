import NextImage from 'next/image'

import styles from './image.module.sass'

import { ImageComponent } from './types'

const Image: ImageComponent = (props) => {
    let { className = '', ...imageProps } = props

    return (
        <figure className={`${className} bg-preload dark:bg-preload-dark rounded-sm overflow-hidden mx-0 my-2 ${styles.figure}`}>
            <NextImage {...imageProps} />
        </figure>
    )
}

export default Image
