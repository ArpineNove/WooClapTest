import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  FormBlock,
  Input,
  Select,
  Option,
  Button,
  UserName,
  UserNameBox,
  Label,
} from './styled';
import translations from '../../../../public/locales/translations.json';
import { sendToSlack } from '@/utils/utils';
import * as Yup from 'yup';
import Modal from '@/app/components/Modal';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(
    translations.form.firstNameLabel + ' is required'
  ),
  lastName: Yup.string().required(
    translations.form.lastNameLabel + ' is required'
  ),
  email: Yup.string()
    .email('Email is invalid')
    .required(translations.form.emailLabel + ' is required'),
  sector: Yup.string().required(translations.form.sectorLabel + ' is required'),
  job: Yup.string().when('sector', {
    is: (val: string) =>
      val === translations.form.business || val === translations.form.education,
    then: (schema) =>
      schema.required(translations.form.jobLabel + ' is required'),
  }),
  organization: Yup.string().when('sector', {
    is: (val: string) => val === translations.form.business,
    then: (schema) =>
      schema.required(translations.form.organizationLabel + ' is required'),
  }),
  establishment: Yup.string().when('sector', {
    is: (val: string) => val === translations.form.education,
    then: (schema) =>
      schema.required(translations.form.establishmentLabel + ' is required'),
  }),
});

interface ContactFormProps {
  domains: string[];
  usersPlans: Record<string, string>;
}

const ContactForm: React.FC<ContactFormProps> = ({ domains, usersPlans }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sector: '',
    job: '',
    organization: '',
    establishment: '',
  });
  const [open, setOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState('');
  const [modalType, setModalType] = useState<'error' | 'success' | undefined>(
    undefined
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const slackMessage = `New contact form submission:
          - First Name: ${formData.firstName}
          - Last Name: ${formData.lastName}
          - Email: ${formData.email}
          - Sector: ${formData.sector}
          - Job: ${formData.job}
          - Organization: ${formData.organization}
          - Establishment: ${formData.establishment}`;

        let webhookUrl = '';

        if (
          !domains.includes(formData.email) &&
          usersPlans[formData.email] !== 'CUSTOM_PLAN'
        ) {
          webhookUrl =
            'https://hooks.slack.com/services/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';
        } else {
          webhookUrl =
            'https://hooks.slack.com/services/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';
        }

        sendToSlack(slackMessage, webhookUrl)
          .then((res) => {
            if (typeof res === 'string') {
              setModalInfo(res);
              setModalType('success');
            } else {
              setModalInfo(res.toString());
              setModalType('error');
            }
          })
          .finally(() => setOpen(true));

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          sector: '',
          job: '',
          organization: '',
          establishment: '',
        });
      })
      .catch((err) => {
        setModalInfo(`Validation failed: ${err.errors}`);
        setModalType('error');
        setOpen(true);
      });
  };

  const isBusiness = formData.sector === translations.form.business;
  const isEducation = formData.sector === translations.form.education;

  return (
    <FormBlock>
      <form onSubmit={handleSubmit}>
        <UserName>
          <UserNameBox>
            <Label>{translations.form.firstNameLabel}*</Label>
            <Input
              name="firstName"
              placeholder={translations.form.firstNamePlaceholder}
              value={formData.firstName}
              onChange={handleChange}
            />
          </UserNameBox>
          <UserNameBox>
            <Label>{translations.form.lastNameLabel}*</Label>
            <Input
              name="lastName"
              placeholder={translations.form.lastNamePlaceholder}
              value={formData.lastName}
              onChange={handleChange}
            />
          </UserNameBox>
        </UserName>
        <UserNameBox>
          <Label>{translations.form.emailLabel}*</Label>
          <Input
            name="email"
            placeholder={translations.form.emailPlaceholder}
            value={formData.email}
            onChange={handleChange}
          />
        </UserNameBox>
        <UserNameBox>
          <Label>{translations.form.sectorLabel}*</Label>
          <Select name="sector" value={formData.sector} onChange={handleChange}>
            <Option value="">{translations.form.dropdown}</Option>
            <Option value={translations.form.business}>
              {translations.form.business}
            </Option>
            <Option value={translations.form.education}>
              {translations.form.education}
            </Option>
          </Select>
        </UserNameBox>

        {isBusiness && (
          <>
            <UserNameBox>
              <Label>{translations.form.jobLabel}*</Label>
              <Select name="job" value={formData.job} onChange={handleChange}>
                <Option value="">{translations.form.dropdown}</Option>
                <Option value="learningTechnologist">
                  {translations.form.learningTechnologist}
                </Option>
                <Option value="trainer">{translations.form.trainer}</Option>
                <Option value="director">{translations.form.director}</Option>
                <Option value="learner">{translations.form.learner}</Option>
                <Option value="other">{translations.form.other}</Option>
              </Select>
            </UserNameBox>
            <UserNameBox>
              <Label>{translations.form.organizationLabel}*</Label>
              <Input
                name="organization"
                placeholder={translations.form.organizationPlaceholder}
                value={formData.organization}
                onChange={handleChange}
              />
            </UserNameBox>
          </>
        )}

        {isEducation && (
          <>
            <UserNameBox>
              <Label>{translations.form.education}*</Label>
              <Select
                name={translations.form.education}
                value={formData.job}
                onChange={handleChange}
              >
                <Option value="">{translations.form.dropdown}</Option>
                <Option value="higherEducation">
                  {translations.form.higherEducation}
                </Option>
                <Option value="k12">{translations.form.k12}</Option>
                <Option value="other">{translations.form.other}</Option>
              </Select>
            </UserNameBox>
            <UserNameBox>
              <Label>{translations.form.establishmentLabel}*</Label>
              <Input
                name={translations.form.establishmentLabel}
                placeholder={translations.form.establishmentPlaceholder}
                value={formData.establishment}
                onChange={handleChange}
              />
            </UserNameBox>
          </>
        )}

        <Button type="submit">{translations.form.submit}</Button>
      </form>
      <Modal
        visible={open}
        close={() => setOpen(false)}
        modalInfo={modalInfo}
        type={modalType}
      />
    </FormBlock>
  );
};

export default ContactForm;
