import Head from 'next/head'

import { OpenGraphComponent } from './types'

const Header: OpenGraphComponent = ({
    title,
    slug,
    summary,
    author,
    image,
    time: { createdWithTime, modifiedWithTime }
}) => {
    let structuredData = `
		{
			"@context":"https://schema.org/",
			"@type":"Article",
			"headline": "${title}",
			"description": "${summary}",
			"datePublished": "${createdWithTime}",
			"dateModified": "${modifiedWithTime}",
			"image": ["${`/content/${slug}/${image.src}`}"],
			"inLanguage": "Thai",
			"mainEntityOfPage": "https://blog.saltyaom.com/${`/content/${slug}/${image.src}`}",
			"url": "https://blog.saltyaom.com/${`/content/${slug}/${image.src}`}",
			"publisher": {
				"@type": "Organization",
				"name": "Mystiar Blog",
				"logo": {			
					"@type": "imageObject",
					"width": "192",
					"height": "192",
					"url": "https://blog.saltyaom.com/icon/shino@large.png"
				}
			},
			"author": {
				"name": "${author.name}",
				"image": {
					"@type": "imageObject",
					"width": "512",
					"height": "512",
					"url": "https://blog.saltyaom.com/author/${author.slug}/${author.image}"
				}
			}
		}
	`.replace(/\n|\t| {2}/g, '')

    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={summary} />

            <meta property="article:published_time" content={createdWithTime} />
            <meta property="article:modified_time" content={modifiedWithTime} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={summary} />
            <meta
                property="og:image"
                content={`https://blog.saltyaom.com/${`/content/${slug}/${image.src}`}`}
            />
            <meta property="og:image:alt" content={title} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={summary} />
            <meta
                name="twitter:image"
                content={`https://blog.saltyaom.com/${`/content/${slug}/${image.src}`}`}
            />

            <link
                rel="canonical"
                href={`https://blog.saltyaom.com/content/${slug}`}
            />

            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: structuredData
                }}
            />
        </Head>
    )
}

export default Header
