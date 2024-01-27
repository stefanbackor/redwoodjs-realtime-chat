import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      data: { bio: 'String', user: { create: { email: 'String528729' } } },
    },
    two: {
      data: { bio: 'String', user: { create: { email: 'String3159342' } } },
    },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
