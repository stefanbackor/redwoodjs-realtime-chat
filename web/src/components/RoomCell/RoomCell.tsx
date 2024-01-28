import { useCallback } from 'react'

import { Label, TextInput } from 'flowbite-react'
import type { FindRoomQuery, FindRoomQueryVariables } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RoomMessagesCell from 'src/components/RoomMessagesCell'

const SUBMIT = gql`
  mutation SendMessageToRoom($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`

export const QUERY = gql`
  query FindRoomQuery($id: Int!) {
    room: room(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRoomQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  props: CellSuccessProps<FindRoomQuery, FindRoomQueryVariables>
) => {
  const { room } = props

  const [create] = useMutation(SUBMIT)

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const input = event.target[0]

      create({
        variables: {
          input: { content: input.value, roomId: room.id, userId: 1 },
        },
      })

      input.value = ''
    },
    [create, room.id]
  )

  return (
    <div>
      <h1 className="text-lg mb-4">{room.name}</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <TextInput
          placeholder="Your message here..."
          id="small"
          type="text"
          sizing="sm"
        />
      </form>

      <RoomMessagesCell roomId={room.id} />
    </div>
  )
}
