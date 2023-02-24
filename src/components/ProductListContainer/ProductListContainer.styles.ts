import Link from "next/link";

import styled from "styled-components";

export const ProductContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 39rem;
  max-height: 39rem;
`;

export const ProductList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  margin-bottom: 1rem;
  scroll-behavior: smooth;
  gap: 1.5rem;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_highlight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  height: 24rem; //swiper height fix
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductName = styled(Link)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
