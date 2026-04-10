import { defineType, defineField } from 'sanity';

export const consultationSection = defineType({
  name: 'consultationSection',
  title: 'Consultation Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'supportingText', title: 'Supporting Text', type: 'text' }),
    defineField({ name: 'formIntroText', title: 'Form Intro Text', type: 'text' }),
  ],
});
