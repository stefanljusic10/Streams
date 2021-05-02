import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamShow from './streams/StreamShow'
import Header from './Header/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact>
          <StreamList />
        </Route>
        <Route path="/streams/create">
          <StreamCreate />
        </Route>
        <Route path="/streams/edit">
          <StreamEdit />
        </Route>
        <Route path="/streams/delete">
          <StreamDelete />
        </Route>
        <Route path="/streams/show">
          <StreamShow />
        </Route>
      </Router>
    </div>
  )
}

export default App
