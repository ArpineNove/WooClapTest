'use client';

import ContactForm from '@/app/components/ContactForm';
import InfoBlock from '@/app/components/InfoBlock';

import { BlueCircle, FormSection } from './styled';

const FormWrapper = () => (
  <FormSection>
    <ContactForm />
    <BlueCircle />
    <InfoBlock />
  </FormSection>
);

export default FormWrapper;
