import { Author } from '@blog/authors'
import { web } from '@services/constant'

export const title = 'Salty Blog'
export const description =
    'สรุปเนื้อหาเรื่อง Programming ไว้อ่านเอง แต่ทำให้อ่านง่ายเผื่อตัวเองลืม มักจะเขียนเรื่อง Web development, React, TypeScript, Flutter และ Performance Optimization'
export const inLanguage = 'th-TH'

export const organization = {
    '@type': 'Organization',
    '@id': `${web}#organization`,
    name: title,
    url: web,
    sameAs: [],
    logo: {
        '@type': 'ImageObject',
        '@id': `${web}#logo`,
        inLanguage: 'th-TH',
        url: `${web}/icon/shino@large.png`,
        width: 512,
        height: 512,
        caption: title
    },
    image: {
        '@type': 'ImageObject',
        '@id': `${web}#cover`,
        inLanguage: 'th-TH',
        url: `${web}/opengraph/cover.jpg`,
        width: 1920,
        height: 1080,
        caption: title
    }
}

export const website = {
    '@type': 'WebSite',
    '@id': `${web}#website`,
    url: web,
    name: title,
    description,
    potentialAction: [
        {
            '@type': 'SearchAction',
            target: `${web}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    ],
    inLanguage
}

export const createPerson = (author: Author) => ({
    '@type': 'Person',
    '@id': `${web}/editor/${author.slug}#person`,
    name: author.name,
    image: {
        '@type': 'ImageObject',
        '@id': `${web}/editor/${author.slug}#personImage`,
        inLanguage,
        url: `${web}/editor/${author.slug}/${author.image}`,
        caption: author.name
    },
    description: author.bio,
    sameAs: [web, ...author.socials.map((social) => social.link)],
    mainEntityOfPage: {
        '@id': `${web}/editor/${author.slug}#webpage`
    }
})
