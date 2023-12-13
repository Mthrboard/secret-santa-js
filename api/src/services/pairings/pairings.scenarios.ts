import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        createdAt: 1846603,
        updatedAt: 6332214,
        event: {
          create: { name: 'String', updatedAt: '2023-12-07T03:54:35.095Z' },
        },
        santa: {
          create: {
            email: 'String3430907',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:54:35.095Z',
          },
        },
        person: {
          create: {
            email: 'String5016599',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:54:35.095Z',
          },
        },
      },
    },
    two: {
      data: {
        createdAt: 5390542,
        updatedAt: 3997650,
        event: {
          create: { name: 'String', updatedAt: '2023-12-07T03:54:35.095Z' },
        },
        santa: {
          create: {
            email: 'String8625890',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:54:35.095Z',
          },
        },
        person: {
          create: {
            email: 'String9640407',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:54:35.095Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
