'use client';

import { PresentBlock, PresentInfoBlock, Title, Description } from './styled';
import Image from 'next/image';

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
    <Image src={imgSrc} alt={imgAlt} width={500} height={475} />
    <PresentInfoBlock>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </PresentInfoBlock>
  </PresentBlock>
);

export default Presentation;
