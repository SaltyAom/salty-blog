import Head from 'next/head'

import { web, website, organization } from '@services/constant'

const OpenGraph = ({
    title = 'Salty Blog - Blog ของ Dev ที่ชอบด๋อย',
    description = 'สรุปเนื้อหาเรื่อง Programming ไว้อ่านเอง แต่ทำให้อ่านง่ายเผื่อตัวเองลืม มักจะเขียนเรื่อง Web development, React, TypeScript, Flutter และ Performance Optimization',
    image = '/opengraph/cover.jpg',
    disableGraph = false
}) => {
    let graph = {
        '@context': 'https://schema.org',
        '@graph': [website, organization]
    }

    let structuredData = JSON.stringify(graph, null, 0)

    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${web}/${image}`} />
            <meta property="og:image:alt" content={title} />

            <meta name="twitter:card" content="description_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${web}/${image}`} />

            <link rel="canonical" href={web} />

            {!disableGraph ? (
                <script
                    type="application/ld+json"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: structuredData
                    }}
                />
            ) : null}
        </Head>
    )
}

export default OpenGraph
