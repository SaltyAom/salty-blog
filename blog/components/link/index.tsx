import Link from 'next/link'

import { MarkdownLinkComponent } from './types'

import styles from '../component.module.sass'

const MarkdownLink: MarkdownLinkComponent = (link) => {
    let { href, children } = link

    if (href.includes('//'))
        return (
            <a className={styles.a} href={href} rel="noreferrer noreopener">
                {children}
            </a>
        )

    return (
        <Link href={href}>
            <a className={styles.a}>{children}</a>
        </Link>
    )
}

export default MarkdownLink
