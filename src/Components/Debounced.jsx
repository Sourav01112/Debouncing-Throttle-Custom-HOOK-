import { useEffect } from 'react'
import { useDebounce } from '../Hook/useDebounce'
import { SinglePage } from './SinglePage'

export const Debounced = ({ input, globalData, setGlobalData, data }) => {
    const { debouncedVal } = useDebounce(input)

    // useEffect for Debounce
    useEffect(() => {
        const filteredData = data?.filter((ele) => {
            return ele.title.toLowerCase().includes(debouncedVal.toLowerCase())
        })
        setGlobalData(filteredData)

    }, [debouncedVal])

    return (
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
                {globalData?.map((ele) => {
                    return (
                        <div key={ele.id} >
                            <SinglePage {...ele} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
