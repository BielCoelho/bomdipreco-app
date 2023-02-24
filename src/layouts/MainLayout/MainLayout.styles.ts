import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    min-height: calc(100vh - ${theme.sizes.navbarHeight});
    max-width: ${theme.sizes.pageWidth};
    padding: 1rem;
  `}
`;
