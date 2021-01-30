/* eslint-disable global-require */
import { StoreonModule } from 'storeon'

import { SyntaxStore, SyntaxEvent } from './types'

const syntaxHighlight = async () => {
    let Prism = await require('prismjs')
    await require('prismjs/components/prism-typescript')

    require('@styles/prism.css')

    Prism.highlightAll()
}

export const syntaxStore: StoreonModule<SyntaxStore, SyntaxEvent> = (store) => {
    store.on('syntax/highlight', () => {
        syntaxHighlight()
    })
}
