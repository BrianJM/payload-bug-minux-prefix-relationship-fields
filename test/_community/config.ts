import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { PostsCollection, postsSlug } from './collections/Posts'
import { CategoriesCollection } from './collections/Categories'
import { TagsCollection } from './collections/Tags'
import { MenuGlobal } from './globals/Menu'

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [
    PostsCollection,
    CategoriesCollection,
    TagsCollection,
    // ...add more collections here
  ],
  globals: [
    MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    await payload.create({
      collection: postsSlug,
      data: {
        name: 'example post #1',
        createdAt: new Date('2020-01-01 01:00').toISOString(),
      },
    })

    await payload.create({
      collection: postsSlug,
      data: {
        name: 'example post #2',
        createdAt: new Date('2020-01-02 01:00').toISOString(),
      },
    })

    await payload.create({
      collection: 'categories',
      data: {
        name: 'example category #1',
        createdAt: new Date('2020-01-03 01:00').toISOString(),
      },
    })

    await payload.create({
      collection: 'categories',
      data: {
        name: 'example category #2',
        createdAt: new Date('2020-01-04 01:00').toISOString(),
      },
    })

    await payload.create({
      collection: 'tags',
      data: {
        name: 'example tag #1',
        createdAt: new Date('2020-01-05 01:00').toISOString(),
      },
    })

    await payload.create({
      collection: 'tags',
      data: {
        name: 'example tag #2',
        createdAt: new Date('2020-01-06 01:00').toISOString(),
      },
    })
  },
})
