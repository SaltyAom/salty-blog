export const transformSlugToKey = <T extends Record<string, any>>(
    key: keyof T,
    contents: T[]
): Record<string, T> => {
    let incrementalContents: Record<string, T> = {}

    contents.forEach((content) => {
        incrementalContents[content[key]] = content
    })

    return incrementalContents
}
