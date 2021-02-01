import { UserBadge } from '@components/molecules'

import { WrittenByComponent } from './types'

const WrittenBy: WrittenByComponent = ({
    prefix,
    created = '',
    author,
    showDate = false
}) => (
    <section
        className="inline text-sm sm:text-base text-gray-400 dark:text-gray-400 font-medium my-4"
    >
        {prefix}
        <UserBadge {...author} />
        {showDate && `On ${created}`}
    </section>
)

export default WrittenBy
