import { useEffect, useState, useRef } from "react";

export const useDebounce = (input, delay = 2000) => {

    const [debouncedVal, setDebouncedVal] = useState('')
    const debouncedID = useRef(false)

    useEffect(() => {

        debouncedID.current = setTimeout(() => {
            setDebouncedVal(input)
        }, delay)

        //cleanup function 
        const CleanUpFn = () => {
            clearTimeout(debouncedID.current)
        }
        return CleanUpFn

    }, [input, delay])

    return { debouncedVal }
}