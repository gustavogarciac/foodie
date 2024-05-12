import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { Container } from './container'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <Container>
      <footer className="mt-4 flex w-full flex-col space-y-4 pb-6">
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase">Sobre Nós</span>
            <ul>
              <li className="list-none text-sm text-muted-foreground">
                <Link href="/about">Nossa empresa</Link>
              </li>
              <li className="list-none text-sm text-muted-foreground">
                <Link href="/about">Nossos produtos</Link>
              </li>
              <li className="list-none text-sm text-muted-foreground">
                <Link href="/about">Atendimento ao cliente</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase">Carreira</span>
            <ul>
              <li className="list-none text-sm text-muted-foreground">
                <Link href="/about">Trabalhe conosco</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold uppercase">Links úteis</span>
            <ul>
              <li className="list-none text-sm text-muted-foreground">
                <Link href="/about">Suporte</Link>
              </li>
              <li className="list-none text-sm text-muted-foreground">
                <Link href="/about">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-2" />

        <div className="grid grid-cols-2 items-center">
          <h1 className="text-2xl font-extrabold">Foodie.</h1>
          <div className="flex flex-row gap-4">
            <Button size="icon" variant="outline" className="h-fit w-fit p-1.5">
              <InstagramIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="h-fit w-fit p-1.5">
              <TwitterIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="h-fit w-fit p-1.5">
              <FacebookIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Foodie. Todos os direitos reservados.
        </p>
      </footer>
    </Container>
  )
}
