import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "./components/global/Footer"
import Navbar from "./components/global/Navbar"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Experience from "./components/pages/Experience"
import Landing from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import Work from "./components/pages/Work"
import "./App.css"

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="global-fadein">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
