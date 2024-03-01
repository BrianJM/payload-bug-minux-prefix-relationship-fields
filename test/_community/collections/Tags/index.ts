import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const TagsCollection: CollectionConfig = {
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
  slug: 'tags',
  defaultSort: '-name',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'createdAt'],
  },
}
