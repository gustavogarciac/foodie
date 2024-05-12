import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Button } from './ui/button'

interface SectionProps {
  title: string
  href: string
}

export const Section = ({ href, title }: SectionProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h3 className="text-xl font-semibold">{title}</h3>
      <Button asChild variant={'link'}>
        <Link href={href} className="flex flex-row items-center gap-1">
          Ver todas
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
