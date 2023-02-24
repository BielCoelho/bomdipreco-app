import React from "react";
import { type InferGetServerSidePropsType, type NextPage, type GetServerSideProps } from "next";

import HomePage from "@/contents/HomePage";
// import { api } from "@/services/api";
import { type IProduct, type ICategories } from "@/interfaces";

import axios from "axios";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ data }) => {
  return <HomePage data={data} />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const hostname = ctx.req.headers.host;

  const [categories, products] = await Promise.all([
    axios.get<ICategories[]>(`http://${hostname}/api/categories`),
    axios.get<IProduct[]>(`http://${hostname}/api/products`),
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
