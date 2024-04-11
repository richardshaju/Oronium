import InputTab from '@/components/InputTab'
import SideBar from '@/components/SideBar'
import React from 'react'

function page() {
  return (
    <div>
        <>
      <div className="flex flex-row" >
        <SideBar page={2}/>
        <InputTab/>
      </div>
    </>
    </div>
  )
}

export default page