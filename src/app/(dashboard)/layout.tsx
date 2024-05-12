import React, { PropsWithChildren } from 'react'

import { Footer } from '@/components/footer'
import { GlobalSearch } from '@/components/global-search'
import { Header } from '@/components/header'

const DashboardLayout = (props: PropsWithChildren) => {
  return (
    <div className="min-w-screen flex flex-col">
      <Header />
      <div className="px-6">
        <GlobalSearch />
      </div>
      {props.children}

      <div className="mt-8 border-t border-border">
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
