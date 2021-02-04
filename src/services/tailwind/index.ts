import styles from './tailwind.module.sass'

const tw = (classNames: string | TemplateStringsArray) =>
    (typeof classNames === 'object' ? classNames[0] : classNames)
        .trim()
        .split(' ')
        .map((className) => styles[className])
        .join(' ')

export default tw
