import { render } from '@redwoodjs/testing/web'

import RoomPage from './RoomPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RoomPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoomPage />)
    }).not.toThrow()
  })
})
