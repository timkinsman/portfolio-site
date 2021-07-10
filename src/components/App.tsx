import React, {useEffect} from "react"
import {connect} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Work from "./pages/Work/Work"
import { colors } from "../colors"
import $ from "jquery"

const App = (props: any) => {
  useEffect(() => {
    $("body").css({"background": colors[props.portfolio.colorscheme].background, "color": colors[props.portfolio.colorscheme].color})
  }, [props.portfolio.colorscheme])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

const mapStateToProps = ( state: { portfolio: { colorscheme: string } } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(App);
