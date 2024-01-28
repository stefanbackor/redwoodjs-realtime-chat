import { Avatar, Button, Timeline } from 'flowbite-react'
import type { RoomMessagesQuery } from 'types/graphql'

import { useSubscription } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

const SUBSCRIPTION = gql`
  subscription ListenForNewMessagesInRoom($roomId: Int!) {
    newMessage(roomId: $roomId) {
      id
      content
      roomId
      createdAt
      user {
        name
        profile {
          avatar
        }
      }
    }
  }
`

export const QUERY = gql`
  query RoomMessagesQuery($roomId: Int!) {
    messagesPaginated(roomId: $roomId, cursor: 0) {
      id
      content
      roomId
      createdAt
      user {
        name
        profile {
          avatar
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (props: CellSuccessProps<RoomMessagesQuery>) => {
  const { messagesPaginated, roomId } = props

  const [messages, setMessages] = React.useState(messagesPaginated)

  useSubscription(SUBSCRIPTION, {
    variables: { roomId: roomId },
    onData: ({ data }) => {
      const message = data && data.data?.['newMessage']
      if (message) {
        setMessages((prevMessages) => [message, ...prevMessages])
      }
    },
  })

  return (
    <Timeline>
      {messages.map((message) => (
        <Timeline.Item key={message.id}>
          <Timeline.Point />
          <Timeline.Content>
            <div className="flex flex-row items-center gap-2 mb-2">
              <Avatar
                size="sm"
                alt={message.user.name}
                img={message.user.profile.avatar}
              />
              {message.user.name}
              <Timeline.Time className="m-0" title={message.createdAt}>
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: 'short',
                  timeStyle: 'short',
                }).format(new Date(message.createdAt))}
              </Timeline.Time>
            </div>
            {/* <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title> */}
            <Timeline.Body>{message.content}</Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
