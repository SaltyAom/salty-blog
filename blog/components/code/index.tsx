/* eslint-disable global-require */
import { useEffect, useMemo, useRef } from 'react'

import { MarkdownCodeComponent } from './types'

import styles from '../component.module.sass'

const Code: MarkdownCodeComponent = ({ children, className = '' }) => {
    let code = useRef<HTMLElement>(null)

    let syntaxHighlight = useMemo(
        () => async (element: HTMLElement) => {
            let Prism = await require('prismjs')
            await require('prismjs/components/prism-typescript')

            require('@styles/prism.css')

            Prism.highlightElement(element)
        },
        []
    )

    useEffect(() => {
        if (code.current) syntaxHighlight(code.current)
    }, [])

    return (
        <code ref={code} className={`${styles.code} ${className}`}>
            {children}
        </code>
    )
}

export default Code
