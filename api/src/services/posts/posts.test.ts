import type { Post } from '@prisma/client'

import { posts, post, createPost, updatePost, deletePost } from './posts'
import type { StandardScenario } from './posts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('posts', () => {
  scenario('returns all posts', async (scenario: StandardScenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario: StandardScenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async (scenario: StandardScenario) => {
    const result = await createPost({
      input: {
        updatedAt: '2024-01-27T15:10:03.362Z',
        title: 'String',
        authorId: scenario.post.two.authorId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-01-27T15:10:03.362Z'))
    expect(result.title).toEqual('String')
    expect(result.authorId).toEqual(scenario.post.two.authorId)
  })

  scenario('updates a post', async (scenario: StandardScenario) => {
    const original = (await post({ id: scenario.post.one.id })) as Post
    const result = await updatePost({
      id: original.id,
      input: { updatedAt: '2024-01-28T15:10:03.362Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-01-28T15:10:03.362Z'))
  })

  scenario('deletes a post', async (scenario: StandardScenario) => {
    const original = (await deletePost({ id: scenario.post.one.id })) as Post
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
