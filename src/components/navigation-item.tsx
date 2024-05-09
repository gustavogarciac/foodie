import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface NavigationItemProps {
  icon: React.ReactNode
  label: string
  href: string
}

export const NavigationItem = ({ href, icon, label }: NavigationItemProps) => {
  return (
    <Link href={href} className="group w-full rounded-md bg-zinc-100 p-3">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          {icon}
          <span className="font-semibold group-hover:underline">{label}</span>
        </div>
        <ChevronRight className="h-4 w-4" />
      </div>
    </Link>
  )
}
