import NextLink from 'next/link'

import styles from './link.module.sass'

import { LinkComponent } from './types'

const Link: LinkComponent = (props) => {
    let { className = '', target, ...linkProps } = props

    return (
        <NextLink {...linkProps}>
            <a
                target={target || ''}
                className={`${className} inline-flex flex-row items-center text-blue-400 no-underline p-1 rounded transition-colors ${styles.link}`}
            >
                {props.children}
            </a>
        </NextLink>
    )
}

export default Link
