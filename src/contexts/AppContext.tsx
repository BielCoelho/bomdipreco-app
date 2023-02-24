import React from "react";
import { createContext, useContext, useState } from "react";

import { type IProduct } from "@/interfaces";

import {
  type IAppContextProviderProps,
  type IAppContextData,
  type ICartProducts,
} from "./AppContext.interfaces";

const AppContext = createContext({} as IAppContextData);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [cart, setCart] = useState<ICartProducts[]>([]);

  const addProduct = (product: IProduct) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product: IProduct) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      if (newCart[index].quantity === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity -= 1;
      }
      setCart(newCart);
    }
  };

  const removeAllProducts = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider value={{ addProduct, removeProduct, removeAllProducts, cart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext error: missing context");
  return context;
};
