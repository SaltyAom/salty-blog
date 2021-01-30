import { FunctionComponent } from 'react'

import Head from 'next/head'

const LandingLayout: FunctionComponent = ({ children }) => (
    <>
        <Head>
            <title>Salty Blog</title>
        </Head>
        <main
            className="w-full flex flex-col mx-auto py-8 px-4"
            style={{
                marginTop: 58,
                maxWidth: 660
            }}
        >
            <header
                className="w-full flex flex-col justify-center mx-auto my-12"
                style={{
                    maxWidth: 240
                }}
            >
                <img
                    src="https://walfiegif.files.wordpress.com/2020/12/out-transparent-23.gif?w=371&h=458"
                    alt="fbk"
                    className="w-full object-contain"
                    style={{
                        maxWidth: 300
                    }}
                />
                <h1 className="text-2xl text-center text-gray-700 dark:text-gray-200 font-medium">
                    Underconstruction
                </h1>
            </header>

            {children}
        </main>
    </>
)

export default LandingLayout
