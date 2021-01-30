import { FunctionComponent } from 'react'

import { StoreContext } from 'storeon/react'
import store from '@models'

export const StoreProvider: FunctionComponent = ({ children }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)
