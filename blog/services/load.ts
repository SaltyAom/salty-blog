import fs from 'fs'
import { resolve } from 'path'

import components from '@blog/components'

import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'

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
        components
    })

    return Content
}
