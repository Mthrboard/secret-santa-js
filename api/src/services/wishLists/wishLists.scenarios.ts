import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-07T03:55:22.277Z',
        user: {
          create: {
            email: 'String1920215',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:55:22.277Z',
          },
        },
        event: {
          create: { name: 'String', updatedAt: '2023-12-07T03:55:22.277Z' },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-07T03:55:22.277Z',
        user: {
          create: {
            email: 'String2649878',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-07T03:55:22.277Z',
          },
        },
        event: {
          create: { name: 'String', updatedAt: '2023-12-07T03:55:22.277Z' },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
