'use client';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

import { Product } from '@/data/types/product';

interface CartItem {
  productId: Product['id'];
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (productId: CartItem['productId']) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: CartItem['productId']): void => {
    setCartItems((prevState) => {
      const productInCart = prevState.some(
        (item) => item.productId === productId
      );

      if (productInCart) {
        return prevState.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });
      }

      return [...prevState, { productId, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => useContext(CartContext);
