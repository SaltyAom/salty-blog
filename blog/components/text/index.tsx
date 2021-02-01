/* eslint-disable jsx-a11y/heading-has-content */
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import styles from '../component.module.sass'

type TextProps = DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
>

const h1 = (props: TextProps) => <h1 className={styles.h1} {...props} />

const h2 = (props: TextProps) => <h2 className={styles.h2} {...props} />

const h3 = (props: TextProps) => <h3 className={styles.h3} {...props} />

const h4 = (props: TextProps) => <h4 className={styles.h4} {...props} />

const h5 = (props: TextProps) => <h5 className={styles.h5} {...props} />

const h6 = (props: TextProps) => <h6 className={styles.h6} {...props} />

const p = (props: TextProps) => <p className={styles.p} {...props} />

const strong = (props: TextProps) => <p className={styles.strong} {...props} />

export { h1, h2, h3, h4, h5, h6, p, strong }
