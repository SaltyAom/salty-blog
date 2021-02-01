import { createContent } from '@blog/services'
import { saltyAom } from '@authors'

const blog = createContent({
    title: 'Opportunity Cost ของสร้าง Web Blog',
    slug: 'salty-blog',
    summary: 'ในการสร้างเว็บซักเว็บนึง พยายามอย่าทำให้มัน over engineer เกินไป เพราะนึกถึงจุดประสงค์ของเว็บที่เราจะทำเป็นหลัก เพราะว่ามันมี Opportunity Cost ในการเพิ่ม feature เสมอ แล้วออกแบบโครงสร้างให้ดีก่อน ไม่งั้นจะมีปัญหาเรื่อง maintain ทีหลังแน่นอน บางทีการยอมเสียเวลาในการออกแบบฐานที่ดีจะช่วยให้เราไม่ต้องเสียเวลาแก้ปัญหาที่ปลายเหตุที่จะทำให้เราเสียเวลามากกว่าการออกแบบแน่ๆ',
    author: saltyAom,
    tags: ['optimization', 'web frontend', 'web blog', 'react'],
    image: {
        src: 'perspective.jpg',
        dimension: {
            width: 2560,
            height: 1440
        }
    },
    time: {
        created: '2021-2-1 20:10'
    }
})

export default blog
