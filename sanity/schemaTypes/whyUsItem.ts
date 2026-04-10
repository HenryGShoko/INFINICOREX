import { defineType, defineField } from 'sanity';

export const whyUsItem = defineType({
  name: 'whyUsItem',
  title: 'Why Us Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', validation: (r) => r.required() }),
    defineField({ name: 'iconKey', title: 'Icon Key', type: 'string', description: 'lucide-react icon name' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
});
