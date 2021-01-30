import { transformSlugToKey } from '@blog/services'

import metadataList from './list'
import { Metadata } from './types'

const metadatas = transformSlugToKey<Metadata>('slug', metadataList)

export { getContent } from '@blog/services'

export type { Metadata, Metadatas, MetaImage, MetaTime } from './types'

export default metadatas
