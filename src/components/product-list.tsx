import React from 'react'

import { ProductItem } from './product-item'

export const ProductList = () => {
  return (
    <div className="scrollbar-hidden mt-2 flex flex-row gap-4 overflow-y-scroll">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}
