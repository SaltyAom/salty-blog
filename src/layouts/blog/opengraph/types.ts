import { FunctionComponent } from 'react'

import { Metadata } from '@blog/contents'

interface OpenGraphProps extends Metadata {}

export type OpenGraphComponent = FunctionComponent<OpenGraphProps>
