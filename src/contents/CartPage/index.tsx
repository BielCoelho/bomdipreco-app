import React from "react";

import { withLayout } from "@/utils/withLayout";
import { useAppContext } from "@/contexts/AppContext";
import ButtonShop from "@/components/ButtonShop";

import * as S from "./CartPage.styles";

const CheckoutList = () => {
  const { cart } = useAppContext();

  const totalPrice = cart.reduce((acc, cur) => (acc += acc + cur.price * cur.quantity), 0);

  if (!cart.length) {
    return (
      <S.ContainerEmpty>
        O carrinho está vazio 😢
        <S.ButtonLink href={"/"}>Voltar as compras</S.ButtonLink>
      </S.ContainerEmpty>
    );
  }

  return (
    <>
      <S.Wrapper>
        <S.TableContainer>
          <S.Table>
            <S.Thead>
              <S.Tr>
                <S.Th>Produto</S.Th>
                <S.Th>
                  Preço<span>(un)</span>
                </S.Th>
                <S.Th>Quantidade</S.Th>
                <S.Th>Total</S.Th>
              </S.Tr>
            </S.Thead>
            <S.Tbody>
              {cart.map((product) => (
                <S.Tr key={product.id}>
                  <S.TdProduct>
                    <S.TdLink href={product.id}>
                      <S.ProductImage src={product.img} alt={product.name} />
                      <S.ProductName>{product.name}</S.ProductName>
                    </S.TdLink>
                  </S.TdProduct>
                  <S.ProductPrice>${product.price.toFixed(2)}</S.ProductPrice>
                  <S.ProductQuantity>
                    <ButtonShop product={product} />
                    {/* <FiTrash2 onClick={() => removeAllProduct(product)} /> */}
                  </S.ProductQuantity>
                  <S.ProductTotal>${(product.price * product.quantity).toFixed(2)}</S.ProductTotal>
                </S.Tr>
              ))}
            </S.Tbody>
          </S.Table>
          <S.CheckoutContainer>
            <S.CheckoutTotalPrice>Valor final: ${totalPrice.toFixed(2)}</S.CheckoutTotalPrice>
            <S.ButtonLink href={"/thankyou"}>Finalizar Compra</S.ButtonLink>
          </S.CheckoutContainer>
        </S.TableContainer>
      </S.Wrapper>
    </>
  );
};

export default withLayout(CheckoutList);
