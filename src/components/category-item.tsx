import React from 'react'

interface CategoryItemProps {
  name: string
}

export const CategoryItem = ({ name }: CategoryItemProps) => {
  return (
    <div className="flex w-fit flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
      <div className="size-8 rounded-full bg-red-500" />
      <span className="text-sm">{name}</span>
    </div>
  )
}
