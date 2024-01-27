import type { Prisma, Message } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MessageCreateArgs>({
  message: {
    one: {
      data: {
        content: 'String',
        room: { create: {} },
        user: { create: { email: 'String4786070' } },
      },
    },
    two: {
      data: {
        content: 'String',
        room: { create: {} },
        user: { create: { email: 'String9281479' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Message, 'message'>
