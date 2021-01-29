import NextLink from 'next/link'

import styles from './link.module.sass'

import { LinkComponent } from './types'

const Link: LinkComponent = (props) => {
    let { className, ...linkProps } = props

    return (
        <NextLink {...linkProps}>
            <a className={`${className} ${styles.link}`}>{props.children}</a>
        </NextLink>
    )
}

export default Link
