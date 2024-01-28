import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        content: 'String',
        room: { create: {} },
        user: { create: { email: 'String8376296' } },
      },
    },
    two: {
      data: {
        content: 'String',
        room: { create: {} },
        user: { create: { email: 'String4885685' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
