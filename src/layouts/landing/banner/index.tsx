import { Image } from '@components/atoms'

import tw from '@tailwind'

import styles from './banner.module.sass'

const Banner = () => (
    <header className={`${styles['banner-container']} ${tw('w-full')}`}>
        <div
            className={`${styles.banner} ${tw(
                'flex flex-col-reverse sm:flex-nowrap sm:flex-row justify-between items-center px-8 pt-0 sm:pt-12 pb-6 mx-auto'
            )}`}
        >
            <section
                className={`${styles['banner-content']} ${tw(
                    'mt-8 sm:mt-0 flex flex-col'
                )}`}
            >
                <h1
                    className={tw`text-4xl text-gray-700 dark:text-gray-100 m-0 mb-4 sm:mb-1 font-medium leading-snug`}
                >
                    Blog ของ Dev ที่ชอบ
                    <mark
                        className={tw`bg-transparent border-0 border-b-4 border-solid color-current border-blue-400`}
                        title="Nendoroid หรือคนไทยเรียกสั้นๆ ว่า เนนด๋อย"
                        style={{
                            color: 'currentcolor'
                        }}
                    >
                        ด๋อย
                    </mark>
                </h1>
                <p
                    className={tw`my-4 text-xl font-light text-gray-400 dark:text-gray-400 leading-8 whitespace-pre-wrap`}
                >
                    สรุปเนื้อหาเรื่อง Programming ไว้อ่านเอง
                    <br />
                    แต่ทำให้อ่านง่ายเผื่อตัวเองลืม
                </p>
                <ul
                    className={`${styles['banner-list']} ${tw(
                        'my-0 pl-1 list-none font-light text-xl text-gray-400 dark:text-gray-400 leading-8'
                    )}`}
                >
                    <li>Web Development</li>
                    <li>React, TypeScript, Flutter</li>
                    <li>Performance Optimization</li>
                </ul>
            </section>
            <Image
                className={tw`rounded-full`}
                src="/editor/saltyaom/saltyaom.jpg"
                width={160}
                height={160}
                alt="SaltyAom"
            />
        </div>
    </header>
)

export default Banner
