import BlogHeader from './header'
import OpenGraph from './opengraph'

import { BlogLayoutComponent } from './types'

import styles from './blog.module.sass'

const BlogLayout: BlogLayoutComponent = (props) => {
    let { children, ...author } = props

    return (
        <>
            <OpenGraph {...props} />
            <main className={styles['blog-layout']}>
                <BlogHeader {...author} />
                {children}
            </main>
        </>
    )
}

export default BlogLayout
