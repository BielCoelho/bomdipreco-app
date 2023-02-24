import React from "react";
import { type InferGetServerSidePropsType, type NextPage, type GetServerSideProps } from "next";

import { generateProduct } from "@/utils/generateProduct";
import ProductPage from "@/contents/ProductPage";

const Product: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  fake,
  id,
}) => {
  return <ProductPage id={id} fake={fake} />;
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id as string;
  const fake = generateProduct();

  return {
    props: {
      id,
      fake,
    },
  };
};
