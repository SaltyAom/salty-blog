import helloWorld from './hello-world'
import { transformSlugToKey } from './helpers'

import { Metadatas } from './types'

const metadatas: Metadatas = transformSlugToKey([helloWorld])

export { getContent } from './helpers'

export type { Metadata, Metadatas, MetaImage, MetaTime } from './types'

export default metadatas
