import { MenuIcon, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Container } from './container'
import { NavigationMenu } from './navigation-menu'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'

export const Header = () => {
  return (
    <header>
      <Container otherClasses="flex flex-row items-center justify-between py-6 px-0">
        {/* Sidebar Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="h-fit w-fit rounded-full p-2"
              size={'icon'}
              variant={'secondary'}
            >
              <MenuIcon className="h-6 w-6" />
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
                    <h3 className="truncate text-lg font-bold">
                      Gustavo Garcia
                    </h3>
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

        <Link href={'/'}>
          <span className="text-xl font-extrabold">Foodie.</span>
        </Link>

        {/* Cart */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="h-fit w-fit rounded-full p-2"
              size={'icon'}
              variant={'default'}
            >
              <ShoppingBag className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={'right'}></SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
