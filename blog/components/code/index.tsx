import { useEffect } from 'react'

import { useStoreon } from 'storeon/react'

import { MarkdownCodeComponent } from './types'

const Code: MarkdownCodeComponent = ({ children, className = '' }) => {
    let { dispatch } = useStoreon()

    useEffect(() =>{ 
        dispatch('syntax/highlight')
    }, [])

    return <code className={className}>{children}</code>
}

export default Code
