import styles from '../component.module.sass'

const MarkdownPre = (props: any) => <pre className={`${styles.pre} language-`} {...props} />

export default MarkdownPre
