import fs from 'fs'
import { resolve } from 'path'

import { StoreProvider } from '@models'

import components from '@blog/components'

import renderToString from 'next-mdx-remote/render-to-string'

export const getContent = async (title: string) => {
    let content = ''

    try {
        content = fs.readFileSync(
            resolve(`./blog/contents/${title}/content.mdx`),
            {
                encoding: 'utf8'
            }
        )
    } catch (err) {
        // Nothing
    }

    const Content = await renderToString(content, {
        components,
        provider: {
            component: StoreProvider,
            props: {}
        },
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: []
        }
    })

    return Content
}
