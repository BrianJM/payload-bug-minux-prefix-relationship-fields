import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const CategoriesCollection: CollectionConfig = {
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  slug: 'categories',
  defaultSort: 'createdAt',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'createdAt'],
  }
}
