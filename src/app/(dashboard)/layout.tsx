import React, { PropsWithChildren } from 'react'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GlobalSearch } from '@/components/global-search'
import { Header } from '@/components/header'

const DashboardLayout = (props: PropsWithChildren) => {
  return (
    <div className="min-w-screen flex h-full min-h-screen flex-col justify-between">
      <Container>
        <Header />
        <GlobalSearch />
      </Container>

      <div className="flex-grow">{props.children}</div>

      <div className="mt-8 border-t border-border">
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout
