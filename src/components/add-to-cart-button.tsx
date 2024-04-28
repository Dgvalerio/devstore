'use client';
import { FC } from 'react';

import { useCart } from '@/context/cart-context';
import { Product } from '@/data/types/product';

interface AddToCartButtonProps {
  productId: Product['id'];
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ productId }) => {
  const { addToCart } = useCart();

  const handleAddProductToCart = (): void => addToCart(productId);

  return (
    <button
      onClick={handleAddProductToCart}
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
};
