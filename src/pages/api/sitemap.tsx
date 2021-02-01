import type { NextApiRequest, NextApiResponse } from 'next'

import metadataList from '@contents/list'
import authorList from '@authors/list'

import { web } from '@services/constant'

const pathList = [
    ['/', 1],
    ['/search', 1],
    ...authorList.map((author) => [`/editor/${author.slug}`, 0.7])
]

export default (req: NextApiRequest, res: NextApiResponse) => {
    let sitemap = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
            ${pathList
                .map(
                    ([path, priority = 0.5]) =>
                        `<url>
                            <loc>${web}${path}</loc>
                            <priority>${priority}</priority>
                        </url>`
                )
                .join('')}
                ${metadataList
                    .map(
                        (metadata) =>
                            `<url>
                                <loc>${web}/content/${metadata.slug}</loc>
                                <priority>.5</priority>
                            </url>`
                    )
                    .join('')}
        </urlset>
`.trim()

    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(sitemap)
}
