import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 1rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.pageWidth};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin-right: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main_highlight};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  margin: 0.75rem;

  transition: all 0.2s;

  &:hover {
    text-shadow: ${({ theme }) => theme.colors.white} 0 0 2px;
  }
`;
