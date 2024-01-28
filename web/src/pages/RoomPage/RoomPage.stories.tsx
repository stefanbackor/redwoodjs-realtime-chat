import type { Meta, StoryObj } from '@storybook/react'

import RoomPage from './RoomPage'

const meta: Meta<typeof RoomPage> = {
  component: RoomPage,
}

export default meta

type Story = StoryObj<typeof RoomPage>

export const Primary: Story = {}
