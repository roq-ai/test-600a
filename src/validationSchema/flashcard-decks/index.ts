import * as yup from 'yup';

export const flashcardDeckValidationSchema = yup.object().shape({
  title: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
