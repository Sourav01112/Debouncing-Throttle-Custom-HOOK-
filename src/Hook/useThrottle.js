import { useEffect, useState, useRef } from "react";

export const useThrottle = (input, delay = 1000) => {

    const [throttleVal, setThrottleVal] = useState('')
    const throttleID = useRef(false)

    useEffect(() => {
        // SetInterval can be used here
        if (!throttleID.current) {
            //if ID has falsey value, then only execute
            setTimeout(() => {
                throttleID.current = false
                //again false, for second round and further
                setThrottleVal(input)
            }, delay);
        }
    }, [input, delay])

    return { throttleVal }
}