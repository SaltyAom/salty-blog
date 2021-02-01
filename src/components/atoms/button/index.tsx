import { ButtonComponent } from './types'

import styles from './link.module.sass'

const Button: ButtonComponent = (props) => (
    // eslint-disable-next-line react/button-has-type
    <button
        {...props}
        className={`inline-flex flex-row items-center bg-gray-100 dark:bg-preload-dark text-gray-600 dark:text-gray-300 hover:text-blue-400 no-underline my-1 px-4 py-1 text-base sm:text-lg rounded transition-colors border-0 cursor-pointer ${styles.button} ${props.className}`}
    >
        {props.children}
    </button>
)

export default Button
