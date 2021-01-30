import { FunctionComponent } from 'react'

import Navigation from './navigation'

const AppLayout: FunctionComponent = ({ children }) => (
    <>
        <Navigation />
        {children}
    </>
)

export default AppLayout
