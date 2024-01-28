import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'

import { Link, routes, useMatch } from '@redwoodjs/router'

const CustomNavbarLink = ({ to, children }) => {
  const matchInfo = useMatch(to)

  return (
    <NavbarLink as={Link} to={to} active={matchInfo.match}>
      {children}
    </NavbarLink>
  )
}

const Header = () => {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <img
          src="https://rwjs-discourse.nyc3.cdn.digitaloceanspaces.com/original/2X/b/b9fb9e6a01aaec0f9a006f9d1a53e49a7415d519.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          RedwoodJS Realtime Chat
        </span>
      </NavbarBrand>
      <NavbarCollapse>
        <CustomNavbarLink to={routes.home()}>Home</CustomNavbarLink>
        <CustomNavbarLink to={routes.about()}>About</CustomNavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Header
