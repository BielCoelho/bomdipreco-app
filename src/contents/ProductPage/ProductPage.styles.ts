import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  place-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  /* padding: 1rem; */
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ProductName = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const ProductDesc = styled.p``;

export const ProductPrice = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const ProductButtonContainer = styled.div`
  width: 60%;
`;
