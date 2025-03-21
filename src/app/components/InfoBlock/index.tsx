'use client';

import { Title, Description, SocialProof, InfoContentWrapper } from './styled';
import translations from '../../../../public/locales/translations.json';

const InfoBlock = () => (
  <InfoContentWrapper>
    <Title>{translations.form.title}</Title>
    <Description>{translations.form.description}</Description>
    <SocialProof>{translations.form.socialProof}</SocialProof>
  </InfoContentWrapper>
);

export default InfoBlock;
