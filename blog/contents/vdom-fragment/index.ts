import { createContent } from '@blog/services'
import { saltyAom } from '@authors'

const blog = createContent({
    title: 'หลักการการทำงานของ Fragment ใน Virtual DOM',
    slug: 'vdom-fragment',
    summary:
        'เมื่อพูดถึง Virtual DOM หลายคนก็มักจะนึกถึง React, Library แรกที่เริ่มใช้ Virtual DOM ในการทำงาน แต่ว่าข้อจำกัดของ React สมัยก่อนคือการที่มี Root Node ได้แค่อันเดียว และเวลาจะ render อะไรก็ต้องมี wrapper เพื่อให้ Render ได้"',
    author: saltyAom,
    tags: ['Virtual DOM', 'VDOM', 'VDOM Fragment', 'React'],
    image: {
        src: 'vdom-fragment.jpg'
    },
    time: {
        created: '2020-3-29 7:00'
    }
})

export default blog
