import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import { type IMainLayoutProps } from "./MainLayout.interfaces";
import * as S from "./MainLayout.styles";

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
      <Footer />
    </>
  );
};
