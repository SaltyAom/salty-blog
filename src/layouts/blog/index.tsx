import BlogHeader from './header'
import OpenGraph from './opengraph'

import { BlogLayoutComponent } from './types'

import styles from './blog.module.sass'

const BlogLayout: BlogLayoutComponent = (props) => {
    let { children, ...author } = props

    return (
        <>
            <OpenGraph {...props} />
            <main
                className={`${styles['blog-layout']} w-full py-4 px-6 mt-10 mb-4 sm:my-8 mx-auto`}
            >
                <BlogHeader {...author} />
                {children}
            </main>
        </>
    )
}

export default BlogLayout
