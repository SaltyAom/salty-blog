import { saltyAom } from '@authors'

import { time } from '../helpers'

import { Metadata } from '../types'

const created = time('2021-1-29 16:55')
const modified = time('2021-1-29 16:55')

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
        created: created.format('D MMM YYYY'),
        createdWithTime: created.toString(),
        modified: modified.format('D MMM YYYY'),
        modifiedWithTime: modified.toString()
    }
}

export default blog
