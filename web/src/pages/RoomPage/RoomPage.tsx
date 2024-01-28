import { Metadata } from '@redwoodjs/web'

import RoomCell from 'src/components/RoomCell'

interface Props {
  id: number
}

const RoomPage = ({ id }: Props) => {
  return (
    <>
      <Metadata title="Room" description="Room page" />
      <RoomCell id={id} />
    </>
  )
}

export default RoomPage
