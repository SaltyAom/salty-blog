import dynamic from 'next/dynamic'

import { MarkdownImageComponent } from './types'

const Image = dynamic(() => import('next/image'))

const MarkdownImage: MarkdownImageComponent = (image) => {
    let { src, alt } = image

    if (!alt.includes(' | ')) throw new Error(`Dimension of ${src} is missing`)

    let [dimension, altMessage] = alt.split(' | ')
    let [width, height] = dimension.split('x')

    return (
        <figure>
            <Image src={src} alt={altMessage} width={width} height={height} />
        </figure>
    )
}

export default MarkdownImage
