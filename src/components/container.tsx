import React from 'react'

import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  otherClasses?: string
}

export const Container = ({ children, otherClasses }: ContainerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-6 lg:px-0', otherClasses)}>
      {children}
    </div>
  )
}
