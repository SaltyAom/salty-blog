import { transformSlugToKey } from '@blog/services'

import saltyAom from './saltyaom'

import { Author } from './types'

export const authors = transformSlugToKey<Author>('slug', [saltyAom])

export { saltyAom }

export type { Author, Authors } from './types'
export default authors
