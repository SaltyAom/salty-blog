import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from 'react'

export interface ButtonProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export type ButtonComponent = FunctionComponent<ButtonProps>
