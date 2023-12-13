import type {
  QueryResolvers,
  MutationResolvers,
  InviteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { mailer } from 'src/lib/mailer'
import { InviteEmail } from 'src/mail/Invite/Invite'

export const invites: QueryResolvers['invites'] = () => {
  return db.invite.findMany()
}

export const invite: QueryResolvers['invite'] = ({ id }) => {
  return db.invite.findUnique({
    where: { id },
  })
}

export const createInvite: MutationResolvers['createInvite'] = async ({
  input,
}) => {
  const invite = await db.invite.create({
    data: {
      eventId: input.eventId,
      status: input.status,
      email: input.email,
      name: input.name,
    },
  })

  const { eventDetails } = input

  await mailer.send(
    InviteEmail({
      name: input.name,
      eventName: eventDetails.eventName,
      eventDate: eventDetails.eventDate,
      eventCreator: eventDetails.eventCreator,
      token: input.eventId,
    }),
    {
      to: input.email,
      subject: `You're Invited to the ${eventDetails.eventName}`,
      from: 'contact-us@example.com',
    }
  )

  return invite
}

export const updateInvite: MutationResolvers['updateInvite'] = ({
  id,
  input,
}) => {
  return db.invite.update({
    data: input,
    where: { id },
  })
}

export const deleteInvite: MutationResolvers['deleteInvite'] = ({ id }) => {
  return db.invite.delete({
    where: { id },
  })
}

export const Invite: InviteRelationResolvers = {
  user: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).user()
  },
  event: (_obj, { root }) => {
    return db.invite.findUnique({ where: { id: root?.id } }).event()
  },
}
