import React, { PropsWithChildren } from 'react'

const DashboardLayout = (props : PropsWithChildren) => {
  return (
    <div className='min-w-screen flex flex-col'>
      {props.children}
    </div>
  )
}

export default DashboardLayout