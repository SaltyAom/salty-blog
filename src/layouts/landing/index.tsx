import { FunctionComponent } from 'react'

import Head from 'next/head'

import tw from '@tailwind'

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

import styles from './landing.module.sass'

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
                className={`${tw('w-full flex flex-col mx-auto py-8 px-6')} ${
                    styles['landing-layout']
                }`}
            >
                {children}
            </main>
        </>
    )
}

export default LandingLayout
