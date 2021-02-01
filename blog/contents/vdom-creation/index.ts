import { createContent } from '@blog/services'
import { saltyAom } from '@authors'

const blog = createContent({
    title: 'มาลองสร้าง Virtual DOM จาก 0 กันดีกว่า',
    slug: 'vdom-creation',
    summary:
        'ในการพัฒนาเว็บไซต์ขึ้นมาซักเว็บหนึ่ง โครงสร้างทุกอย่างล้วนมาจาก DOM (Document Object Model) ซึ่งเป็น Object Tree ประมวลผลด้วย JavaScript แต่ด้วยความที่มันมีขนาดใหญ่เอาซะมากๆ การที่เราจะแก้ไขใหม่ทั้งหมดใช้เวลาและทรัพยากรสูง จึงเกิดการมองหาวิธีที่ดีขึ้นก็นี้แทน',
    author: saltyAom,
    image: {
        src: 'vdom-creation.jpg'
    },
    time: {
        created: '2020-4-11 7:00'
    }
})

export default blog
