import fs from 'fs'
import { resolve } from 'path'

import { serialize } from 'next-mdx-remote/serialize'

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

    const source = await serialize(content)

    return source
}
