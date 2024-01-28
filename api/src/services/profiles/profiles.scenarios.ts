import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: { data: { user: { create: { email: 'String5601694' } } } },
    two: { data: { user: { create: { email: 'String400781' } } } },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
