import React from 'react'
import ClockHeader from './components/ClockHeader'
import ClockSlogan from './components/ClockSlogan'
import ClockTime from './components/ClockTime'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className='container text-center'>
      <ClockHeader />
      <ClockSlogan />
      <ClockTime />
    </div>
  )
}

export default App