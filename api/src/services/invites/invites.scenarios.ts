import type { Prisma, Invite } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.InviteCreateArgs>({
  invite: {
    one: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            updatedAt: '2023-12-09T23:11:20.438Z',
            user: {
              create: {
                email: 'String9649383',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-12-09T23:11:20.438Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        email: 'String',
        name: 'String',
        event: {
          create: {
            name: 'String',
            updatedAt: '2023-12-09T23:11:20.438Z',
            user: {
              create: {
                email: 'String1451574',
                hashedPassword: 'String',
                salt: 'String',
                updatedAt: '2023-12-09T23:11:20.438Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Invite, 'invite'>
