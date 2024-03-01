import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      admin: {
        sortOptions: '-updatedAt',
      }
    },
    {
      name: 'tag',
      type: 'relationship',
      relationTo: 'tags',
    },
  ],
  slug: postsSlug,
  defaultSort: 'createdAt',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'createdAt', 'category', 'tag'],
  }
}
