import type {
  QueryResolvers,
  MutationResolvers,
  MessageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
// import type { NewMessageChannelType } from 'src/subscriptions/newMessage/newMessage'

export const messagesPaginated: QueryResolvers['messagesPaginated'] = ({
  roomId,
  cursor,
}) => {
  return db.message.findMany({
    where: {
      roomId,
      ...(cursor ? { id: { lt: cursor } } : {}),
    },
    orderBy: { createdAt: 'desc' },
  })
}

export const messages: QueryResolvers['messages'] = () => {
  return db.message.findMany()
}

export const message: QueryResolvers['message'] = ({ id }) => {
  return db.message.findUnique({
    where: { id },
  })
}

// type arg2 = { context: { pubSub: any } }
type CreateMessageFn = MutationResolvers['createMessage'] extends (
  ...args: infer U
) => infer R
  ? (...args: U) => R
  : never
export const createMessage: CreateMessageFn = ({ input }, { context }) => {
  const message = db.message.create({
    data: input,
  })
  context.pubSub.publish('newMessage', input.roomId, message)
  return message
}

export const updateMessage: MutationResolvers['updateMessage'] = ({
  id,
  input,
}) => {
  return db.message.update({
    data: input,
    where: { id },
  })
}

export const deleteMessage: MutationResolvers['deleteMessage'] = ({ id }) => {
  return db.message.delete({
    where: { id },
  })
}

export const Message: MessageRelationResolvers = {
  room: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).room()
  },
  user: (_obj, { root }) => {
    return db.message.findUnique({ where: { id: root?.id } }).user()
  },
}
