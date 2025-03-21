'use client';

import Image from 'next/image';

import { HeaderContainer, Logo } from './styled';

const Header = () => (
  <HeaderContainer>
    <Logo href="https://www.wooclap.com/">
      <Image
        src="/images/wooclap-logo.svg"
        alt="Wooclap Logo"
        width={130}
        height={30}
      />
    </Logo>
  </HeaderContainer>
);

export default Header;
