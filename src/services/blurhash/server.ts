import { readdirSync, readFile } from 'fs'
import { promisify } from 'util'

import { getBlurhash } from '@plaiceholder/blurhash'

import { ReducedMetadata } from '@blog/contents'
import { isServer } from '@services/validation'

import { BlurhashMap } from './types'

export const generateBlurhashMap = async ({
    title = '',
    recommended = []
}: {
    title?: string
    recommended?: ReducedMetadata[]
}) => {
    if (!isServer) return {}

    let blurhashMap: BlurhashMap = {}

    let read = promisify(readFile)

    let getContentImages = title
        ? readdirSync(`./public/content/${title}`).map((file) =>
              read(`./public/content/${title}/${file}`)
                  .then((image) => getBlurhash(image))
                  .then((blurhash) => {
                      blurhashMap[`${title}/${file}`] = blurhash
                  })
          )
        : [new Promise<void>((resolve) => resolve())]

    await Promise.all([
        ...getContentImages,
        ...recommended.map(({ slug, image: { src: file } }) =>
            read(`./public/content/${slug}/${file}`)
                .then((image) => getBlurhash(image))
                .then((blurhash) => {
                    blurhashMap[`${slug}/${file}`] = blurhash
                })
        ),
        ...recommended.map(({ author: { slug, image: file } }) =>
            read(`./public/editor/${slug}/${file}`)
                .then((image) => getBlurhash(image))
                .then((blurhash) => {
                    blurhashMap[`${slug}/${file}`] = blurhash
                })
        )
    ])

    return blurhashMap
}
