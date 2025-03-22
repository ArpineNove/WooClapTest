'use client';

import ContactForm from '@/app/components/ContactForm';
import InfoBlock from '@/app/components/InfoBlock';

import { BlueCircle, FormSection } from './styled';

type Props = {
  domains: string[];
  usersPlans: Record<string, string>;
};

const FormWrapper = ({ domains = [], usersPlans = {} }: Props) => (
  <FormSection>
    <ContactForm domains={domains} usersPlans={usersPlans} />
    <BlueCircle />
    <InfoBlock />
  </FormSection>
);

export default FormWrapper;
