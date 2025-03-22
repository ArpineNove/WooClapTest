'use client';

import { useTranslation } from 'next-i18next';
import { TFunction } from 'i18next';
import '@i18n/i18n';

import FormWrapper from '@/app/components/FormWrapper';
import Presentation from '@/app/components/Presentation ';

export default function MainLayout() {
  const { t }: { t: TFunction<'translation', undefined> } = useTranslation();

  return (
    <>
      <FormWrapper />
      <Presentation
        imgSrc="/images/mcq-poll-find-number.png"
        imgAlt="imgCloud"
        title={t('quickPresentation1.title')}
        description={t('quickPresentation1.description')}
      />
      <Presentation
        imgSrc="/images/open-find-word-cloud.png"
        imgAlt="imgCloud"
        title={t('quickPresentation2.title')}
        description={t('quickPresentation2.description')}
        isReversed
      />
    </>
  );
}
