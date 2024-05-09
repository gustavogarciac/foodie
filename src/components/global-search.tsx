'use client'

import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from './ui/button'

export const GlobalSearch = () => {
  const [search, setSearch] = React.useState('')
  const router = useRouter()

  function onSubmitSearch() {
    if (!search) return

    console.log(search)

    router.push(`/search/?q=${search}`)

    setSearch('')
  }

  return (
    <div className="flex w-full flex-row items-center gap-2 rounded-lg bg-zinc-200 px-3 py-1">
      <input
        className="min-h-11 w-full bg-transparent outline-none"
        placeholder="Pesquise pratos, restaurantes"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        onClick={onSubmitSearch}
        variant={'ghost'}
        className="w-fit p-1 hover:bg-transparent"
      >
        <span className="sr-only">Pesquisar</span>
        <SearchIcon className="h-6 w-6" />
      </Button>
    </div>
  )
}
