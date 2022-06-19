import React from 'react'
import LeftBody from './LeftBody'
import RightBody from './RightBody'

function Body() {
  return (
    <div className='mt-24 w-[70%] flex space-x-4'>
        <LeftBody />
        <RightBody />
        
    </div>
  )
}

export default Body