import { Image } from '@components/atoms'

import WrittenBy from '@components/molecules/written-by'

import { BlogHeaderComponent } from './types'

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
    <header className="flex flex-col w-full mt-8 sm:mt-12 mb-6">
        <h1 className="text-5xl font-semibold text-gray-900 dark:text-gray-100 m-0">
            {title}
        </h1>
        <WrittenBy author={author} created={created} prefix="Written by" showDate />
        <Image
            src={`/content/${slug}/${src}`}
            alt={title}
            width={width}
            height={height}
        />
    </header>
)

export default BlogHeader
