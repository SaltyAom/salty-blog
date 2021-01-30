import { saltyAom } from '@authors'

import { time } from '@blog/services'

import { Metadata } from '../types'

const created = time('2020-4-11 7:00')
const modified = time('2020-4-11 7:00')

const blog: Metadata = {
    title: 'มาลองสร้างการ render จาก Virtual DOM เข้า DOM จริงๆ กันดีกว่า',
    slug: 'vdom-render',
    summary:
        'นการพัฒนาเว็บไซต์ขึ้นมาซักเว็บหนึ่ง โครงสร้างทุกอย่างล้วนมาจาก DOM (Document Object Model) ซึ่งเป็น Object Tree ประมวลผลด้วย JavaScript แต่ด้วยความที่มันมีขนาดใหญ่เอาซะมากๆ การที่เราจะแก้ไขใหม่ทั้งหมดใช้เวลาและทรัพยากรสูง จึงเกิดการมองหาวิธีที่ดีขึ้นก็นี้แทน',
    author: saltyAom,
    image: {
        src: 'vdom-render.jpg',
        dimension: {
            width: 1920,
            height: 1080
        }
    },
    time: {
        created: created.format('D MMM YYYY'),
        createdWithTime: created.toString(),
        modified: modified.format('D MMM YYYY'),
        modifiedWithTime: modified.toString()
    }
}

export default blog
