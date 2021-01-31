import Head from 'next/head'

import {
    createPerson,
    inLanguage,
    organization,
    web,
    website
} from '@services/constant'

import { OpenGraphComponent } from './types'

const Header: OpenGraphComponent = ({
    title,
    slug,
    summary,
    author,
    image,
    time: { createdWithTime, modifiedWithTime }
}) => {
    let graph = {
        '@context': 'https://schema.org',
        '@graph': [
            organization,
            website,
            createPerson(author),
            {
                '@type': 'ImageObject',
                '@id': `${web}/content/${slug}/#primaryimage`,
                inLanguage,
                url: `${web}/content/${slug}/${image.src}`,
                width: image.dimension.width,
                height: image.dimension.width
            },
            {
                '@type': 'WebPage',
                '@id': `${web}/content/${slug}#webpage`,
                url: `${web}/content/${slug}`,
                name: title,
                isPartOf: { '@id': `${web}#website` },
                primaryImageOfPage: {
                    '@id': `${web}/content/${slug}/#primaryimage`
                },
                datePublished: createdWithTime,
                dateModified: modifiedWithTime,
                inLanguage,
                potentialAction: [
                    {
                        '@type': 'ReadAction',
                        target: [`${web}/content/${slug}`]
                    }
                ]
            },
            {
                '@type': 'Article',
                '@id': `${web}/content/${slug}#article`,
                author: {
                    '@id': `${web}/editor/${author.slug}#person`
                },
                publisher: { '@id': `${web}#organization` },
                headline: title,
                datePublished: createdWithTime,
                dateModified: modifiedWithTime,
                image: {
                    '@id': `${web}/content/${slug}/#primaryimage`
                },
                inLanguage: 'th-TH',
                mainEntityOfPage: {
                    '@id': `${web}/content/${slug}#webpage`
                }
            }
        ]
    }

    let structuredData = JSON.stringify(graph, null, 0)

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
                content={`${web}/${`/content/${slug}/${image.src}`}`}
            />
            <meta property="og:image:alt" content={title} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={summary} />
            <meta
                name="twitter:image"
                content={`${web}/${`/content/${slug}/${image.src}`}`}
            />

            <link rel="canonical" href={`${web}/content/${slug}`} />

            <meta name="robots" content="index, follow" />

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
