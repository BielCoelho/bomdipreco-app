import React from "react";
import { FiTrash } from "react-icons/fi";

import { useAppContext } from "@/contexts/AppContext";

import * as S from "./ButtonShop.styles";
import { type IButtonShopProps } from "./ButtonShop.interfaces";

const ButtonShop = ({ product }: IButtonShopProps) => {
  const { cart } = useAppContext();
  const { addProduct, removeProduct } = useAppContext();

  const currentProduct = cart.filter((item) => item.id === product.id)[0];

  if (!currentProduct) {
    return <S.Button onClick={() => addProduct(product)}>Adicionar ao carrinho</S.Button>;
  } else {
    return (
      <S.ButtonLoaded>
        <S.ButtonLoadedAction onClick={() => removeProduct(product)}>
          {currentProduct.quantity === 1 ? <FiTrash size={16} /> : "-"}
        </S.ButtonLoadedAction>
        <S.ButtonLoadedCount>{currentProduct.quantity}</S.ButtonLoadedCount>
        <S.ButtonLoadedAction onClick={() => addProduct(product)}>+</S.ButtonLoadedAction>
      </S.ButtonLoaded>
    );
  }
};

export default ButtonShop;
