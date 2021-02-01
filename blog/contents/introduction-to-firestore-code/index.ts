import { createContent } from '@blog/services'
import { saltyAom } from '@authors'

const blog = createContent({
    title: 'เริ่มต้นเขียนคำสั่ง Firestore จาก 0 ด้วย JavaScript กันดีกว่า~',
    slug: 'introduction-to-firestore-code',
    summary:
        'This is summaryพอพูดถึง Firebase หลายคนก็คงจะนึกถึงอะไรที่ ยากๆ แต่ความจริงแล้ว Firebase เนี่ย ทำให้ชีวิตใครหลายคนง่ายขึ้นมากๆ, เราสามารถที่จะทำ Database แบบ Realtime ได้ง่ายมาก และ ยังทำ Authentication ได้โดยที่เราไม่จำเป็นต้องเขียน Backend และ ทำ Database ขึ้นเองด้วยซ้ำ!',
    author: saltyAom,
    tags: [
        'Firestore',
        'Firebase',
        'Firebase JavaScirpt',
        'เริ่มเขียน Firebase',
        'สอน Firebase'
    ],
    image: {
        src: 'introduction-to-firestore-code.jpg'
    },
    time: {
        created: '2019-2-19 18:45'
    }
})

export default blog
