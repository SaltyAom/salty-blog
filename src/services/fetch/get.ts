export const get = async <T = Object>(link: string): Promise<T> => {
    let response = await fetch(link)
    let data = response.json()

    return data
}
