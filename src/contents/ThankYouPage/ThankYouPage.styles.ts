import Link from "next/link";

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
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
