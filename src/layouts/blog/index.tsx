import BlogHeader from './header'
import OpenGraph from './opengraph'

import { BlogLayoutComponent } from './types'

import './blog.sass'

const BlogLayout: BlogLayoutComponent = (props) => {
    let { children, ...author } = props

    return (
        <>
            <OpenGraph {...props} />
            <main id="blog-layout" className="w-full py-4 px-6 mt-10 mb-4 sm:my-8 mx-auto">
                <BlogHeader {...author} />
                {children}
            </main>
        </>
    )
}

export default BlogLayout
