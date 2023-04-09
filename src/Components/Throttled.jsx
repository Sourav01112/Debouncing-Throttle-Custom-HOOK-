import { useEffect } from 'react'
import { useThrottle } from '../Hook/useThrottle'
import { SinglePage } from './SinglePage'

export const Throttled = ({ input, globalData, setGlobalData, data }) => {

  const { throttleVal } = useThrottle(input)

  // useEffect for throttle
  useEffect(() => {
    // console.log(throttleVal)
    const filteredData = data?.filter((ele) => {
      return ele.title.toLowerCase().includes(throttleVal.toLowerCase())
    })
    setGlobalData(filteredData)

  }, [throttleVal])

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
