import Head from 'next/head'

import { OpenGraph } from '@components/atoms'

import {
    web,
    inLanguage,
    createPerson,
    organization,
    website
} from '@services/constant'

import EditorHeader from './header'

import { EditorLayoutComponent } from './types'

import styles from './editor.module.sass'

const EditorLayout: EditorLayoutComponent = (props) => {
    let { children, ...author } = props

    let graph = {
        '@context': 'https://schema.org',
        '@graph': [
            website,
            organization,
            createPerson(author),
            {
                '@type': 'ProfilePage',
                '@id': `${web}/editor/${author.slug}#webpage`,
                url: `${web}/editor/${author.slug}`,
                isPartOf: { '@id': `${web}#website` },
                description: `${author.name} ${author.bio}`,
                inLanguage,
                potentialAction: [
                    {
                        '@type': 'ReadAction',
                        target: [`${web}/editor/${author.slug}`]
                    }
                ]
            }
        ]
    }

    let structuredData = JSON.stringify(graph, null, 0)

    return (
        <>
            <Head>
                <title>{author.name}</title>
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: structuredData
                    }}
                />
            </Head>
            <OpenGraph disableGraph />
            <main
                className={`${styles.editor} flex flex-col items-start mx-auto px-4`}
            >
                <EditorHeader {...author} />
                {children}
            </main>
        </>
    )
}

export default EditorLayout
