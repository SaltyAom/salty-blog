import NextImage from 'next/image'

import tw from '@tailwind'

import styles from './image.module.sass'

import { ImageComponent } from './types'

const Image: ImageComponent = (props) => {
    let { className = '', ...imageProps } = props

    return (
        <figure
            className={
                tw(
                    `bg-preload dark:bg-preload-dark rounded-sm overflow-hidden mx-0 my-2 ${className}`
                ) + ` ${styles.figure}`
            }
        >
            <NextImage {...imageProps} />
        </figure>
    )
}

export default Image
