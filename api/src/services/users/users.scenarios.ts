import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String9737347',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-07T05:30:27.757Z',
      },
    },
    two: {
      data: {
        email: 'String3847056',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-07T05:30:27.757Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
