export interface SocialLink {
    social: string
    user: string
    link: string
}

export interface Author {
    name: string
    slug: string
    detail: string
    image: string
    bio: string
    socials: SocialLink[]
}

export type Authors = Record<string, Author>