import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: { name: 'String', updatedAt: '2023-12-07T03:55:00.313Z' },
        },
        author: {
          create: {
            email: 'String5178665',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:55:00.313Z',
          },
        },
        recipient: {
          create: {
            email: 'String2043214',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:55:00.313Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: { name: 'String', updatedAt: '2023-12-07T03:55:00.313Z' },
        },
        author: {
          create: {
            email: 'String6540100',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:55:00.313Z',
          },
        },
        recipient: {
          create: {
            email: 'String5871156',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:55:00.313Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
