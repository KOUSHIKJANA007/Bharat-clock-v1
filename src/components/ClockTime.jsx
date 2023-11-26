import React from 'react'

const ClockTime = () => {
    let time=new Date();
  return (
    <div>This is current time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</div>
  )
}

export default ClockTime