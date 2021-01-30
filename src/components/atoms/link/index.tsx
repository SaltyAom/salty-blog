import NextLink from 'next/link'

import styles from './link.module.sass'

import { LinkComponent } from './types'

const Link: LinkComponent = (props) => {
    let {
        className = '',
        target,
        color = 'text-blue-400',
        ...linkProps
    } = props

    return (
        <NextLink {...linkProps}>
            <a
                target={target || ''}
                className={`inline-flex flex-row items-center ${color} hover:text-blue-400 no-underline p-1 rounded transition-colors ${styles.link} ${className}`}
            >
                {props.children}
            </a>
        </NextLink>
    )
}

export default Link
