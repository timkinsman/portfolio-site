import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Landing from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Work from "./pages/Work/Work"

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
