import { Metadata, ReducedMetadata } from '@contents'

export const transformSlugToKey = <T extends Record<string, any>>(
    key: keyof T,
    contents: T[]
): Record<string, T> => {
    let incrementalContents: Record<string, T> = {}

    contents.forEach((content) => {
        incrementalContents[content[key]] = content
    })

    return incrementalContents
}

export const reduceMetadata = ({
    title,
    slug,
    image,
    author: { name, slug: authorSlug, image: authorImage },
    time: { created }
}: Metadata): ReducedMetadata => ({
    title,
    slug,
    image,
    author: {
        name,
        slug: authorSlug,
        image: authorImage
    },
    time: {
        created
    }
})
