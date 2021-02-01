import { createContent } from '@blog/services'
import { saltyAom } from '@authors'

const blog = createContent({
    title: 'สั้นๆ ว่า React ขนาด 3KB',
    slug: 'preact-3kb-of-react',
    summary: 'ด้วยความที่ React.js มีประสิทธิภาพที่ดีมาก จากการใช้ Virtual DOM, Eco System ที่กว้างๆ มากๆ พัฒนาขึ้นโดย Facebook และใช้ในบริษัทใหญ่ๆ หลายที่อย่าง Netflix, Dropbox และ Facebook เลยไม่แปลกเลยที่จะเป็นที่นิยมมาก',
    author: saltyAom,
    tags: ['Preact', 'React alternative', 'Preact สรุป', 'optimization', 'frontend web'],
    image: {
        src: 'preact-3kb-of-react.jpg',
    },
    time: {
        created: '2020-3-26 13:36'
    }
})

export default blog
