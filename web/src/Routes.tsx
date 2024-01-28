// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import PageLayout from './layouts/PageLayout/PageLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PageLayout}>
        <Route path="/room/{id:Int}" page={RoomPage} name="room" />
        <Route path="/about" page={AboutPage} name="about" prerender />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
