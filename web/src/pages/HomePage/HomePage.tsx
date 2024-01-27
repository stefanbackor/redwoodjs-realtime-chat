import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PostsCell from '../../components/PostsCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>

      <PostsCell />

      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
