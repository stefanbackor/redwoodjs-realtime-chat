import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String4309641' } },
    two: { data: { email: 'String3011660' } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
