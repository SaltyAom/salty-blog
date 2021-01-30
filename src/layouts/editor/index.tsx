import Head from 'next/head'

import EditorHeader from './header'

import { EditorLayoutComponent } from './types'

import styles from './editor.module.sass'

const EditorLayout: EditorLayoutComponent = (props) => {
    let { children, ...author } = props

    return (
        <>
            <Head>
                <title>{author.name}</title>
            </Head>
            <main
                className={`${styles.editor} flex flex-col items-start mx-auto px-4`}
            >
                <EditorHeader {...author} />
                {children}
            </main>
        </>
    )
}

export default EditorLayout
