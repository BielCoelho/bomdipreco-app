import Link from "next/link";

import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ContainerEmpty = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background_highlight};
  overflow: hidden;
`;

export const Thead = styled.thead`
  > tr {
    background-color: ${({ theme }) => theme.colors.main_highlight};
  }
`;

export const Tr = styled.tr`
  border-bottom: 0.5rem solid transparent;
  color: ${({ theme }) => theme.colors.white};
`;

export const Th = styled.th`
  span {
    font-size: 0.75rem;
    font-weight: 400;
  }
`;

export const Tbody = styled.tbody``;

export const TdProduct = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TdLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 70%;
  max-width: 8rem;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.base};
`;

export const ProductName = styled.span`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  color: black;
`;

export const ProductPrice = styled.td`
  width: 20%;
  text-align: center;
  color: black;
`;

export const ProductQuantity = styled.td`
  svg {
    width: 100%;
  }
`;

export const ProductTotal = styled.td`
  width: 20%;
  text-align: center;
  font-weight: bold;
  color: black;
`;

//TODO: fazer sticky
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: 80%;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background_highlight};
  box-shadow: ${({ theme }) => theme.shadows.expanded};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CheckoutTotalPrice = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const ButtonLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.main};
`;
