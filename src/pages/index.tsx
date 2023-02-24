import React from "react";
import { type InferGetServerSidePropsType, type NextPage, type GetServerSideProps } from "next";

import HomePage from "@/contents/HomePage";
import { api } from "@/services/api";
import { type IProduct, type ICategories } from "@/interfaces";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  return <HomePage data={data} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const [categories, products] = await Promise.all([
    api.get<ICategories[]>("/categories"),
    api.get<IProduct[]>("/products"),
  ]);

  const data = {
    products: products.data,
    categories: categories.data,
  };

  return {
    props: {
      data,
    },
  };
};
