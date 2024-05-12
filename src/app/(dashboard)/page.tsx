import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Container>
      <div className="mt-6">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-semibold">Categorias</h3>
          <Button asChild variant={'link'}>
            <Link
              href={'/categories'}
              className="flex flex-row items-center gap-1"
            >
              Ver todas
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-row gap-4 overflow-y-scroll">
          <div className="flex w-fit flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
          <div className="flex flex-row items-center gap-2 rounded-md bg-zinc-100 px-2 py-1 shadow-md">
            <div className="size-8 rounded-full bg-red-500" />
            <span>Cachorro Quente</span>
          </div>
        </div>
      </div>
    </Container>
  )
}
