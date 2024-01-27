import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        updatedAt: '2024-01-27T15:10:03.373Z',
        title: 'String',
        author: { create: { email: 'String3484915' } },
      },
    },
    two: {
      data: {
        updatedAt: '2024-01-27T15:10:03.373Z',
        title: 'String',
        author: { create: { email: 'String1687406' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
