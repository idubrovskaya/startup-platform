import { defineField, defineType } from 'sanity';

export const startup = defineType({
  type: 'document',
  name: 'startup',
  title: 'Startup',
  fields: [
    defineField({
      type: 'slug',
      name: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'reference',
      to: [{ type: 'author' }],
      name: 'author',
    }),
    defineField({
      type: 'number',
      name: 'views',
    }),
    defineField({
      type: 'text',
      name: 'description',
    }),
    defineField({
      type: 'string',
      name: 'category',
      validation: (Rule) =>
        Rule.min(1).max(20).required().error('Please add a category'),
    }),
    defineField({
      type: 'url',
      name: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'markdown',
      name: 'pitch',
    }),
  ],
});
