import { Button } from 'flowbite-react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import RoomsCell from '../../components/RoomsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <RoomsCell />
    </>
  )
}

export default HomePage
