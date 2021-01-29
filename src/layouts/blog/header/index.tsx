import NextImage from 'next/image'
import { Link, Image } from '@components/atoms'

import { BlogHeaderComponent } from './types'

import './header.sass'

const BlogHeader: BlogHeaderComponent = ({
    title,
    author,
    slug,
    image: {
        src,
        dimension: { width, height }
    },
    time: { created }
}) => (
    <header id="header">
        <h1 className="title">{title}</h1>
        <small className="author">
            Written by
            <Link className="link" href={`/editor/${author.name}`}>
                <div className="image">
                    <NextImage
                        src={`/editor/${author.image}`}
                        alt={`${author.name}'s profile image`}
                        width={28}
                        height={28}
                        quality={100}
                    />
                </div>
                {author.name}
            </Link>
            On {created}
        </small>
        <Image
            src={`/content/${slug}/${src}`}
            alt={title}
            width={width}
            height={height}
        />
    </header>
)

export default BlogHeader
