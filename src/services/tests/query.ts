export const query = (element: Element, attribute: string, value: string) =>
    element.querySelector(`[${attribute}='${value}']`)
