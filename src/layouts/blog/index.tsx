import BlogHeader from './header'
import OpenGraph from './opengraph'

import { BlogLayoutComponent } from './types'

import './blog.sass'

const BlogLayout: BlogLayoutComponent = (props) => {
    let { children, title, author, image, slug, time } = props

    return (
        <>
            <OpenGraph {...props} />
            <main id="blog">
                <BlogHeader
                    title={title}
                    slug={slug}
                    author={author}
                    image={image}
                    time={time}
                />
                {children}
            </main>
        </>
    )
}

export default BlogLayout
