import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { NavigationMenu } from './navigation-menu'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="h-fit w-fit rounded-full px-2 py-1"
            size={'icon'}
            variant={'ghost'}
          >
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Perfil</h2>
              <div className="flex flex-row items-center gap-4">
                <Image
                  src="https://github.com/gustavogarciac.png"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                  alt=""
                />
                <div className="flex flex-col gap-0.5">
                  <h3 className="truncate text-lg font-bold">Gustavo Garcia</h3>
                  <p className="text-left text-sm text-muted-foreground">
                    I love fast food!
                  </p>
                </div>
              </div>
            </div>
          </SheetHeader>

          <Separator className="my-4" />

          <NavigationMenu />
        </SheetContent>
      </Sheet>
    </header>
  )
}
