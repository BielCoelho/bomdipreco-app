import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.main};
  width: 100%;
  height: ${({ theme }) => theme.sizes.navbarHeight};
  box-shadow: ${({ theme }) => theme.shadows.expanded};
`;

export const Container = styled.nav`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.pageWidth};
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Cart = styled(Link)`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.logo};

  span {
    font-family: ${({ theme }) => theme.fonts.base};
    font-weight: 400;
  }
`;

export const CartIcon = styled(FiShoppingCart)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
