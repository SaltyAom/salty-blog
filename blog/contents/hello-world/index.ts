import { saltyAom } from '@authors'

import { time } from '../helpers'

import { Metadata } from '../types'

const blog: Metadata = {
    title: 'Hello World',
    slug: 'hello-world',
    summary: 'This is summary',
    author: saltyAom,
    image: {
        src: 'opened.jpg',
        dimension: {
            width: 3920,
            height: 2126
        }
    },
    time: {
        created: time('2021-1-29 16:55'),
        modified: time('2021-1-29 16:55')
    }
}

export default blog
