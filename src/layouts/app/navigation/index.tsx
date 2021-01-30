import { Link } from '@components/atoms'

import styles from './navigation.module.sass'

const Navigation = () => (
    <div
        className={`${styles.navigation} fixed z-50 top-0 left-0 w-full bg-white dark:bg-preload-dark`}
    >
        <nav
            className={`${styles['navigation-bar']} flex flex-row justify-between items-center mx-auto px-2`}
        >
            <Link href="/" className="text-xl px-2">
                Salty Blog
            </Link>
            <section>
                <Link href="/search" className="text-lg px-2" color="text-gray-300 dark:text-gray-400">
                    Search
                </Link>
            </section>
        </nav>
    </div>
)
export default Navigation
