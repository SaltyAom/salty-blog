import { createContent } from '@blog/services'
import { saltyAom } from '@authors'

const blog = createContent({
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
        created: '2021-1-29 16:55'
    }
})

export default blog
