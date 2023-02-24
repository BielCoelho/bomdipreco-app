import React from "react";

import { withLayout } from "@/utils/withLayout";
import { useAppContext } from "@/contexts/AppContext";
import ButtonShop from "@/components/ButtonShop";

import * as S from "./ProductPage.styles";
import { type IProductPageProps } from "./ProductPage.interfaces";

const ProductPage = ({ id, fake }: IProductPageProps) => {
  const { cart } = useAppContext();

  const item = cart.filter((item) => item.id === id)[0];

  return (
    <S.Container>
      <S.ProductImage src={item ? item.img : fake.img} />

      <S.ProductDescContainer>
        <S.ProductName>{item ? item.name : fake.name}</S.ProductName>
        <S.ProductDesc>{item ? item.description : fake.description}</S.ProductDesc>
        <S.ProductPrice>${item ? item.price.toFixed(2) : fake.price.toFixed(2)}</S.ProductPrice>
        <S.ProductButtonContainer>
          <ButtonShop product={item ? item : fake} />
        </S.ProductButtonContainer>
      </S.ProductDescContainer>
    </S.Container>
  );
};

export default withLayout(ProductPage);
