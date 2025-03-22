import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import '@i18n/i18n';
import { useTranslation } from 'next-i18next';

import {
  FormBlock,
  Input,
  Select,
  Option,
  Button,
  UserName,
  UserNameBox,
  Label,
  ErrorText,
} from './styled';
import {
  generateSlackMessage,
  sendCyphMessage,
  sendToSlack,
} from '@/utils/utils';
import { validationSchema } from '@/app/components/ContactForm/model';

import Modal from '@/app/components/Modal';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  sector: string;
  job: string;
  education: string;
  organization: string;
  establishment: string;
};

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      sector: '',
      job: '',
      organization: '',
      establishment: '',
    },
  });

  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState('');
  const [modalType, setModalType] = useState<'error' | 'success' | undefined>(
    undefined
  );

  const { t } = useTranslation();

  const onSubmit = async (data: FormData) => {
    const [domains, usersPlans] = await Promise.all([
      fetch('/api/loadCsvData').then((res) => res.json()),
      fetch('/api/loadUsersPlansData').then((res) => res.json()),
    ]);

    validationSchema
      .validate(data, { abortEarly: false })
      .then(() => {
        const slackMessage = generateSlackMessage(data);
        const webhookUrl =
          !domains.includes(data.email) &&
          usersPlans[data.email] !== 'CUSTOM_PLAN'
            ? process.env.NEXT_PUBLIC_SLACK_WEBHOOK_DEFAULT
            : process.env.NEXT_PUBLIC_SLACK_WEBHOOK_CUSTOM;

        sendCyphMessage(slackMessage).then((res: string) =>
          sendToSlack(res, webhookUrl || '')
            .then((res) => {
              if (typeof res === 'string') {
                setModalInfo(res);
                setModalType('success');
              } else {
                setModalInfo(res.toString());
                setModalType('error');
              }
            })
            .finally(() => setOpen(true))
        );

        reset();
      })
      .catch((err) => {
        if (err.inner) {
          err.inner.forEach((error: { path: string; message: string }) => {
            setError(error.path as keyof FormData, {
              type: 'manual',
              message: error.message,
            });
          });
        }
      });
  };

  const sector = watch('sector');
  const isBusiness = sector === t('form.business');
  const isEducation = sector === t('form.education');

  return (
    <FormBlock>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserName>
          <UserNameBox>
            <Label>{t('form.firstNameLabel')}*</Label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    placeholder={t('form.firstNamePlaceholder')}
                  />
                  {errors.firstName && (
                    <ErrorText>{errors.firstName.message}</ErrorText>
                  )}
                </>
              )}
            />
          </UserNameBox>
          <UserNameBox>
            <Label>{t('form.lastNameLabel')}*</Label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    placeholder={t('form.lastNamePlaceholder')}
                  />
                  {errors.lastName && (
                    <ErrorText>{errors.lastName.message}</ErrorText>
                  )}
                </>
              )}
            />
          </UserNameBox>
        </UserName>
        <UserNameBox>
          <Label>{t('form.emailLabel')}*</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <Input {...field} placeholder={t('form.emailPlaceholder')} />
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </>
            )}
          />
        </UserNameBox>
        <UserNameBox>
          <Label>{t('form.sectorLabel')}*</Label>
          <Controller
            name="sector"
            control={control}
            render={({ field }) => (
              <>
                <Select {...field}>
                  <Option value="">{t('form.dropdown')}</Option>
                  <Option value={t('form.business')}>
                    {t('form.business')}
                  </Option>
                  <Option value={t('form.education')}>
                    {t('form.education')}
                  </Option>
                </Select>
                {errors.sector && (
                  <ErrorText>{errors.sector.message}</ErrorText>
                )}
              </>
            )}
          />
        </UserNameBox>
        {isBusiness && (
          <>
            <UserNameBox>
              <Label>{t('form.jobLabel')}*</Label>
              <Controller
                name="job"
                control={control}
                render={({ field }) => (
                  <>
                    <Select {...field}>
                      <Option value="">{t('form.dropdown')}</Option>
                      <Option value="learningTechnologist">
                        {t('form.learningTechnologist')}
                      </Option>
                      <Option value="trainer">{t('form.trainer')}</Option>
                      <Option value="director">{t('form.director')}</Option>
                      <Option value="learner">{t('form.learner')}</Option>
                      <Option value="other">{t('form.other')}</Option>
                    </Select>
                    {errors.job && <ErrorText>{errors.job.message}</ErrorText>}
                  </>
                )}
              />
            </UserNameBox>
            <UserNameBox>
              <Label>{t('form.organizationLabel')}*</Label>
              <Controller
                name="organization"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      placeholder={t('form.organizationPlaceholder')}
                    />
                    {errors.organization && (
                      <ErrorText>{errors.organization.message}</ErrorText>
                    )}
                  </>
                )}
              />
            </UserNameBox>
          </>
        )}

        {isEducation && (
          <>
            <UserNameBox>
              <Label>{t('form.education')}*</Label>
              <Controller
                name="education"
                control={control}
                render={({ field }) => (
                  <>
                    <Select {...field}>
                      <Option value="">{t('form.dropdown')}</Option>
                      <Option value="higherEducation">
                        {t('form.higherEducation')}
                      </Option>
                      <Option value="k12">{t('form.k12')}</Option>
                      <Option value="other">{t('form.other')}</Option>
                    </Select>
                    {errors.education && (
                      <ErrorText>{errors.education.message}</ErrorText>
                    )}
                  </>
                )}
              />
            </UserNameBox>
            <UserNameBox>
              <Label>{t('form.establishmentLabel')}*</Label>
              <Controller
                name="establishment"
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      {...field}
                      placeholder={t('form.establishmentPlaceholder')}
                    />
                    {errors.establishment && (
                      <ErrorText>{errors.establishment.message}</ErrorText>
                    )}
                  </>
                )}
              />
            </UserNameBox>
          </>
        )}

        <Button type="submit">{t('form.submit')}</Button>
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
