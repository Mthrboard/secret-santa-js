import type {
  QueryResolvers,
  MutationResolvers,
  ThankYouRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const thankYous: QueryResolvers['thankYous'] = () => {
  return db.thankYou.findMany()
}

export const thankYou: QueryResolvers['thankYou'] = ({ id }) => {
  return db.thankYou.findUnique({
    where: { id },
  })
}

export const createThankYou: MutationResolvers['createThankYou'] = ({
  input,
}) => {
  return db.thankYou.create({
    data: input,
  })
}

export const updateThankYou: MutationResolvers['updateThankYou'] = ({
  id,
  input,
}) => {
  return db.thankYou.update({
    data: input,
    where: { id },
  })
}

export const deleteThankYou: MutationResolvers['deleteThankYou'] = ({ id }) => {
  return db.thankYou.delete({
    where: { id },
  })
}

export const ThankYou: ThankYouRelationResolvers = {
  event: (_obj, { root }) => {
    return db.thankYou.findUnique({ where: { id: root?.id } }).event()
  },
  author: (_obj, { root }) => {
    return db.thankYou.findUnique({ where: { id: root?.id } }).author()
  },
  recipient: (_obj, { root }) => {
    return db.thankYou.findUnique({ where: { id: root?.id } }).recipient()
  },
}
