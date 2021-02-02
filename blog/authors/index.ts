import { transformSlugToKey } from '@blog/services'

import authorList from './list'

import { Author } from './types'

export const authors = transformSlugToKey<Author>('slug', authorList)

export { default as saltyAom } from './saltyaom'

export type { Author, Authors, ReducedAuthor } from './types'
export default authors
