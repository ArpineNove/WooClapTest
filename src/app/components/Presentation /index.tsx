'use client';

import Image from 'next/image';
import { Description, PresentBlock, PresentInfoBlock, Title } from './styled';

interface PresentationProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  isReversed?: boolean;
}

const Presentation = ({
  imgSrc,
  imgAlt,
  title,
  description,
  isReversed = false,
}: PresentationProps) => (
  <PresentBlock reversed={isReversed}>
    <Image src={imgSrc} alt={imgAlt} width={500} height={500} />
    <PresentInfoBlock>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </PresentInfoBlock>
  </PresentBlock>
);

export default Presentation;
