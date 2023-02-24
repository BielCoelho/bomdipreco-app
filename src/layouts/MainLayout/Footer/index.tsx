import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import * as S from "./Footer.styles";

const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.SocialIconsContainer>
          <S.SocialIconLink href="#">
            <FiFacebook />
          </S.SocialIconLink>
          <S.SocialIconLink href="#">
            <FiTwitter />
          </S.SocialIconLink>
          <S.SocialIconLink href="#">
            <FiInstagram />
          </S.SocialIconLink>
        </S.SocialIconsContainer>
        <S.LinksContainer>
          <S.Link href="#">Apoio ao Cliente</S.Link>
          <S.Link href="#">Informação Legal</S.Link>
          <S.Link href="#">Blog</S.Link>
        </S.LinksContainer>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
