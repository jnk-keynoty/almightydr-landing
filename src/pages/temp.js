import React from "react"
import { createMemoryHistory } from "history"
import { Route, Router, Switch } from "react-router-dom"
import "assets/scss/material-kit-react.scss?v=1.4.0"
import "typeface-roboto"
import "typeface-roboto-slab"

// pages for this product
import AlmightydrPage from "./AlmightydrPage/AlmightydrPage.jsx"

let hist = createMemoryHistory()

export default () => (
    <Router history={hist}>
      <Switch>
        <Route path="/almightydr-page" component={AlmightydrPage} />{" "}
        <Route path="/" component={AlmightydrPage} />{" "}
      </Switch>
    </Router>
)
