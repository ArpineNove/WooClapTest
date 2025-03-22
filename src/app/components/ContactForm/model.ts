import * as Yup from 'yup';
import translations from '../../../../public/locales/translations.json';

export const validationSchema = Yup.object().shape({
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
