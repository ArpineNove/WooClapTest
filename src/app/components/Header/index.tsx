'use client';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { ButtonWrapper, HeaderContainer, Logo, Button } from './styled';

const Header = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <HeaderContainer>
      <Logo href="https://www.wooclap.com/">
        <Image
          src="/images/wooclap-logo.svg"
          alt="Wooclap Logo"
          width={130}
          height={30}
        />
      </Logo>
      <ButtonWrapper>
        <Button
          select={i18n.language === 'en' ? 'en' : 'fr'}
          onClick={() => changeLanguage('en')}
        >
          EN
        </Button>
        <Button
          select={i18n.language === 'en' ? 'fr' : 'en'}
          onClick={() => changeLanguage('fr')}
        >
          FR
        </Button>
      </ButtonWrapper>
    </HeaderContainer>
  );
};

export default Header;
