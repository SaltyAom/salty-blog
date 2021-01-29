// * Copy from: https://medium.com/get-it-working/get-prismjs-working-in-react-a6d989e59290
import { useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'

import { MarkdownCodeComponent } from './types'

import './prism.css'

const Code: MarkdownCodeComponent = ({ children, className = '' }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return <code className={className.trim()}>{children}</code>
}

export default Code
