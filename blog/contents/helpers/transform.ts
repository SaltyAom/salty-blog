import { Metadata, Metadatas } from '../types'

export const transformSlugToKey = (contents: Metadata[]): Metadatas => {
    let incrementalContents: Metadatas = {}

    contents.forEach((content) => {
        incrementalContents[content.slug] = content
    })

    return incrementalContents
}
