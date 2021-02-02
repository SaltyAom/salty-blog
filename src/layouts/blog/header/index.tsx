import tw from '@tailwind'

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
    <header className={tw`flex flex-col w-full mt-8 px-6 sm:mt-12 mb-6`}>
        <h1
            className={tw`text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-gray-100 m-0`}
            style={{
                lineHeight: '1.375em'
            }}
        >
            {title}
        </h1>
        <WrittenBy
            author={author}
            created={created}
            prefix="Written by"
            showDate
        />
        <Image
            src={`/content/${slug}/${src}`}
            alt={title}
            width={width}
            height={height}
            quality={90}
        />
    </header>
)

export default BlogHeader
