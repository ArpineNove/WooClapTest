'use client';

import { TFunction } from 'i18next';
import { useTranslation } from 'next-i18next';
import '@i18n/i18n';

import { Title, Description, SocialProof, InfoContentWrapper } from './styled';

const InfoBlock = () => {
  const { t }: { t: TFunction<'translation', undefined> } = useTranslation();
  return (
    <InfoContentWrapper>
      <Title>{t('form.title')}</Title>
      <Description>{t('form.description')}</Description>
      <SocialProof>{t('form.socialProof')}</SocialProof>
    </InfoContentWrapper>
  );
};

export default InfoBlock;
