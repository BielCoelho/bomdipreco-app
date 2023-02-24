import React, { useEffect } from "react";

import { useAppContext } from "@/contexts/AppContext";
import { withLayout } from "@/utils/withLayout";

import * as S from "./ThankYouPage.styles";

const ThankYouPage = () => {
  const { removeAllProducts } = useAppContext();

  useEffect(() => {
    removeAllProducts();
  }, []);

  return (
    <S.Container>
      Obrigado
      <S.ButtonLink href={"/"}>Voltar as compras</S.ButtonLink>
    </S.Container>
  );
};

export default withLayout(ThankYouPage);
