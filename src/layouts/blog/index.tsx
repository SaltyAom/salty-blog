import BlogHeader from './header'
import OpenGraph from './opengraph'

import { BlogLayoutComponent } from './types'

import './blog.sass'

const BlogLayout: BlogLayoutComponent = (props) => {
    let { children, ...author } = props

    return (
        <>
            <OpenGraph {...props} />
            <main id="blog">
                <BlogHeader {...author} />
                {children}
            </main>
        </>
    )
}

export default BlogLayout
