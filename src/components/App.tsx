import React, {useEffect} from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Landing from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Work from "./pages/Work/Work"
import { DARK, LIGHT, COFFEE } from "../colors"
import {connect} from "react-redux";
import $ from "jquery"

const App = (props: any) => {

  useEffect(() => {
    switch(props.portfolio.theme){
      case "light":
        $("body").css({"background": LIGHT.background, "color": LIGHT.color})
        $("a").hover(function(){ $(this).css('color', LIGHT.hover) }, function(){ $(this).css('color', LIGHT.color) })
        break;
      case "dark":
        $("body").css({"background": DARK.background, "color": DARK.color})
        $("a").hover(function(){ $(this).css('color', DARK.hover) }, function(){ $(this).css('color', DARK.color) })
        break;
      case "coffee":
        $("body").css({"background": COFFEE.background, "color": COFFEE.color})
        $("a").hover(function(){ $(this).css('color', COFFEE.hover) }, function(){ $(this).css('color', COFFEE.color) })
        break;
    }
  }, [props.portfolio.theme])

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

const mapStateToProps = ( state: { portfolio: any; } ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(App);
