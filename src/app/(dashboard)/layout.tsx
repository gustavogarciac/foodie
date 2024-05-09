import React, { PropsWithChildren } from 'react'

import { Header } from '@/components/header'

const DashboardLayout = (props: PropsWithChildren) => {
  return (
    <div className="min-w-screen flex flex-col">
      <Header />
      {props.children}
    </div>
  )
}

export default DashboardLayout
