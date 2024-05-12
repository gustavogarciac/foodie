import { ArrowDownIcon, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export const ProductItem = () => {
  return (
    <Card className="min-w-48 p-0">
      <CardContent className="relative p-0">
        <Link
          href="/products/1"
          className="flex flex-col items-center justify-center px-3 py-2"
        >
          <span className="absolute left-2 top-2 flex flex-row items-center gap-0.5 rounded-md bg-primary px-1 text-sm font-semibold text-secondary">
            <ArrowDownIcon className="h-4 w-4" />
            10%
          </span>
          <Image
            src="/assets/example-dish.png"
            alt=""
            width={400}
            height={400}
            quality={100}
            className="aspect-square max-w-28 object-cover"
          />
          <h4 className="font-bold">Burguer Bistro</h4>
          <p className="line-clamp-1 text-xs text-muted-foreground">
            Carne de costela, alface, tomate, picles, cheddar, maionese, molho
            especial
          </p>

          <div className="mt-3 flex w-full flex-row items-center justify-between">
            <p className="self-start text-lg font-bold">R$ 19,90</p>
            <Button
              className="h-fit w-fit rounded-full px-2 py-1"
              size="icon"
              variant={'outline'}
            >
              <ShoppingBagIcon className="h-5 w-5" />
            </Button>
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}
