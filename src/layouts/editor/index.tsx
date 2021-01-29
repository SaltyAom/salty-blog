import { EditorLayoutComponent } from './types'

import EditorHeader from './header'

import styles from './editor.module.sass'

const EditorLayout: EditorLayoutComponent = (props) => {
    let { children, ...author } = props

    return (
        <main
            className={`${styles.editor} flex flex-col items-start mx-auto px-4`}
        >
            <EditorHeader {...author} />
            {children}
        </main>
    )
}

export default EditorLayout
