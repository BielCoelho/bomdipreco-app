import React from "react";

import { useAppContext } from "@/contexts/AppContext";

import * as S from "./Header.styles";

const Header = () => {
  const { cart } = useAppContext();
  const count = cart.reduce((acc, cur) => (acc += cur.quantity), 0);

  return (
    <S.HeaderWrapper>
      <S.Container>
        <S.Logo href={"/"}>
          Bom<span>di</span>Preço
        </S.Logo>
        <S.Cart href="/cart">
          <S.CartIcon />
          <span>({count})</span>
        </S.Cart>
      </S.Container>
    </S.HeaderWrapper>
  );
};

export default Header;
