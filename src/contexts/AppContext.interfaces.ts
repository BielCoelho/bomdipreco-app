import { type ReactNode } from "react";

import { type IProduct } from "@/interfaces";

export interface IAppContextData {
  addProduct: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  removeAllProducts: () => void;
  cart: ICartProducts[];
}

export interface IAppContextProviderProps {
  children: ReactNode;
}

export interface ICartProducts extends IProduct {
  quantity: number;
}
