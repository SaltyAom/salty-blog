import { time } from '@blog/services'

import { Metadata } from '@blog/contents'

import sizeOf from 'image-size'

import { resolve } from 'path'

interface RawMetadata extends Omit<Metadata, 'image' | 'time'> {
    image: string
    time: {
        created: string
        modified?: string
    }
}

export const createContent = (blog: RawMetadata): Metadata => {
    let createdTime = time(blog.time.created)
    let modifiedTime = blog.time.modified
        ? time(blog.time.modified)
        : createdTime

    let { width, height } = sizeOf(
        resolve(
            `./public/content/${blog.slug}/${blog.image}`
        )
    )

    if (typeof width === 'undefined' || typeof height === 'undefined')
        throw new Error(
            `"public/content/${blog.slug}/${blog.image}" doesn't have size`
        )

    return {
        ...blog,
        image: {
            src: blog.image,
            dimension: {
                width,
                height
            }
        },
        time: {
            created: createdTime.format('D MMM YYYY'),
            createdWithTime: createdTime.toString(),
            modified: modifiedTime.format('D MMM YYYY'),
            modifiedWithTime: modifiedTime.toString()
        }
    }
}
