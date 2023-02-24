import "swiper/css";
import "swiper/css/bundle";
import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { type IProductListContainer } from "./ProductListContainer.interfaces";
import * as S from "./ProductListContainer.styles";
import ButtonShop from "../ButtonShop";

const ProductListContainer = ({ products }: IProductListContainer) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        autoHeight
        breakpoints={{
          310: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ dynamicBullets: true, clickable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <S.ProductCard>
              <S.LinkContainer href={product.id}>
                <S.ProductImage src={product.img} alt={product.name} />
                <S.ProductName>{product.name}</S.ProductName>
              </S.LinkContainer>
              {/* <S.ProductDescription>{product.description}</S.ProductDescription> */}
              <S.ProductPrice>${product.price.toFixed(2)}</S.ProductPrice>
              <ButtonShop product={product} />
            </S.ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductListContainer;
