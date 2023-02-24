import React from "react";

import CategoryGridList from "@/components/CategoryGridList";
import { withLayout } from "@/utils/withLayout";
import ProductListContainer from "@/components/ProductListContainer";

import * as S from "./HomePage.styles";
import { type IHomePageProps } from "./HomePage.interfaces";

const HomePage = ({ data }: IHomePageProps) => {
  return (
    <S.Container>
      <S.SectionTitle>Categorias</S.SectionTitle>
      <CategoryGridList categories={data.categories} />
      <S.SectionTitle>Colecionáveis</S.SectionTitle>
      <ProductListContainer products={data.products} />
      <S.SectionTitle>Drone</S.SectionTitle>
      <ProductListContainer products={data.products} />
      <S.SectionTitle>Gaming</S.SectionTitle>
      <ProductListContainer products={data.products} />
      <S.SectionTitle>Headphones</S.SectionTitle>
      <ProductListContainer products={data.products} />
    </S.Container>
  );
};

export default withLayout(HomePage);
