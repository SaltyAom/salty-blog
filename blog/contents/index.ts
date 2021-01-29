import { transformSlugToKey } from '@blog/services'

import helloWorld from './hello-world'

import { Metadata } from './types'

export const metadataList = [helloWorld]
const metadatas = transformSlugToKey<Metadata>('slug', metadataList)

export { getContent } from './helpers'

export type { Metadata, Metadatas, MetaImage, MetaTime } from './types'

export default metadatas
