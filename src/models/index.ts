import { createStoreon } from 'storeon'

import { syntaxStore } from './syntax'

const store = createStoreon<any>([syntaxStore])

export { syntaxStore }

export { StoreProvider } from './provider'

export type { SyntaxStore, SyntaxEvent } from './syntax/types'

export default store
