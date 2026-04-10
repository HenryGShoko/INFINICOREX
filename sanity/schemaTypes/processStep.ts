import { defineType, defineField } from 'sanity';

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Step Order', type: 'number', validation: (r) => r.required() }),
  ],
  orderings: [{ title: 'Step Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
