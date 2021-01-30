import { useState, useCallback } from 'react'

export const useRefState = <T = any>(
    initialValue: T | null = null
    // eslint-disable-next-line no-unused-vars
): [T | null, (value: T) => void] => {
    let [value, set] = useState<T | null>(initialValue)

    let parentRef = useCallback((param) => {
        if (param) set(param)
    }, [])

    return [value, parentRef]
}
