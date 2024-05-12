import Image from 'next/image'

import { CategoryItem } from '@/components/category-item'
import { Container } from '@/components/container'
import { ProductList } from '@/components/product-list'
import { Section } from '@/components/section'

export default function Home() {
  return (
    <Container>
      <div className="mt-6">
        <Section title="Categorias" href="/categories" />

        <div className="scrollbar-hidden flex flex-row gap-4 overflow-y-scroll">
          <CategoryItem name="Pizzas" />
          <CategoryItem name="Hambúrgueres" />
          <CategoryItem name="Sobremesas" />
        </div>
      </div>

      <Image
        src="/assets/wallpaper-01.jpg"
        width={780}
        height={780}
        quality={100}
        alt=""
        className="mt-6 aspect-video max-h-60 w-full rounded-md object-cover"
      />

      <div className="mt-6">
        <Section title="Produtos Recomendados" href="/products/recommended" />

        <ProductList />
      </div>

      <div className="mt-6">
        <Section title="Produtos em promoção" href="/products/sale" />

        <ProductList />
      </div>

      <Image
        src="/assets/wallpaper-02.jpg"
        width={780}
        height={780}
        quality={100}
        alt=""
        className="mt-6 aspect-video max-h-60 w-full rounded-md object-cover"
      />

      <div className="mt-6">
        <Section title="Comida Oriental" href="/categories/comida-oriental" />

        <ProductList />
      </div>

      <div className="mt-6">
        <Section title="Pizzas" href="/categories/pizzas" />

        <ProductList />
      </div>
    </Container>
  )
}
