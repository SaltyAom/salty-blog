import { FunctionComponent } from 'react'

import Head from 'next/head'

import { OpenGraph } from '@components/atoms'

import {
    title,
    description,
    inLanguage,
    web,
    website,
    organization
} from '@services/constant'

import Banner from './banner'

const LandingLayout: FunctionComponent = ({ children }) => {
    let graph = {
        '@context': 'https://schema.org',
        '@graph': [
            website,
            organization,
            {
                '@type': 'CollectionPage',
                '@id': `${web}#webpage`,
                url: web,
                name: title,
                isPartOf: { '@id': `${web}#website` },
                about: { '@id': `${web}#organization` },
                description,
                inLanguage,
                potentialAction: [{ '@type': 'ReadAction', target: [web] }]
            }
        ]
    }

    let structuredData = JSON.stringify(graph, null, 0)

    return (
        <>
            <Head>
                <title>Salty Blog</title>
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: structuredData
                    }}
                />
            </Head>
            <OpenGraph disableGraph />
            <Banner />
            <main
                className="w-full flex flex-col mx-auto py-8 px-4"
                style={{
                    maxWidth: 660
                }}
            >
                {children}
            </main>
        </>
    )
}

export default LandingLayout
