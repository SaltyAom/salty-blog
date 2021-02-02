import styles from './tailwind.module.sass'

const tw = (classNames: string | TemplateStringsArray) =>
    (typeof classNames === 'object' ? classNames[0] : classNames)
        .trimLeft()
        .trimRight()
        .split(' ')
        .map((className) => styles[className])
        .join(' ')

export default tw
