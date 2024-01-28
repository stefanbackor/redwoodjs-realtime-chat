import { ListGroup } from 'flowbite-react'
import type { RoomsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query RoomsQuery {
    rooms {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ rooms }: CellSuccessProps<RoomsQuery>) => {
  return (
    <>
      <h1 className="w-full text-lg text-center mb-3">Pick a room</h1>

      <div className="flex flex-col justify-center">
        <ListGroup className=" max-w-64">
          {rooms.map((room) => (
            <ListGroup.Item key={room.id}>
              <Link to={routes.room({ id: room.id })}>
                {room.name || room.id}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  )
}
