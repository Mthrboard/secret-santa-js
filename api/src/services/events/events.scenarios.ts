import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: { data: { name: 'String', updatedAt: '2023-12-09T23:37:02.772Z' } },
    two: { data: { name: 'String', updatedAt: '2023-12-09T23:37:02.772Z' } },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
