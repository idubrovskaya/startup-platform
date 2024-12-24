import { UserIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const author = defineType({
  type: 'document',
  name: 'author',
  title: 'Author',
  icon: UserIcon,
  fields: [
    defineField({
      type: 'number',
      name: 'id',
    }),
    defineField({
      type: 'string',
      name: 'name',
    }),
    defineField({
      type: 'string',
      name: 'username',
    }),
    defineField({
      type: 'string',
      name: 'email',
    }),
    defineField({
      type: 'url',
      name: 'image',
    }),
    defineField({
      type: 'text',
      name: 'bio',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});
