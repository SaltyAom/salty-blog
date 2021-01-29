import Link from 'next/link'

import { MarkdownLinkComponent } from './types'

const MarkdownLink: MarkdownLinkComponent = (link) => {
    let { href, children } = link

    if (href.includes('//'))
        return (
            <a href={href} rel="noreferrer noreopener">
                {children}
            </a>
        )

    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    )
}

export default MarkdownLink
