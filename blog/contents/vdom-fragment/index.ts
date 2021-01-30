import { saltyAom } from '@authors'

import { time } from '@blog/services'

import { Metadata } from '../types'

const created = time('2020-3-29 7:00')
const modified = time('2020-3-29 7:00')

const blog: Metadata = {
    title: 'มาลองสร้าง Virtual DOM จาก 0 กันดีกว่า',
    slug: 'vdom-fragment',
    summary:
        'เมื่อพูดถึง Virtual DOM หลายคนก็มักจะนึกถึง React, Library แรกที่เริ่มใช้ Virtual DOM ในการทำงาน แต่ว่าข้อจำกัดของ React สมัยก่อนคือการที่มี Root Node ได้แค่อันเดียว และเวลาจะ render อะไรก็ต้องมี wrapper เพื่อให้ Render ได้"',
    author: saltyAom,
    image: {
        src: 'vdom-fragment.jpg',
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
