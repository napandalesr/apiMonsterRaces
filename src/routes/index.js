import React from "react";
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { _ROUTES } from "../utils/constanst";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useDispatch } from "react-redux";
import { _scroll } from "../redux/actions/scrollAction";
import { _width } from "../redux/actions/widthAction";

const Routes = () => {
  const dispatch = useDispatch();

  const scrollAnimation = () => {
    dispatch(_scroll(document.documentElement.scrollTop));
  };

  const screenAnimation = () => {
    dispatch(_width(window.screen.width));
  };

  React.useEffect(()=>{
    window.onscroll = () => scrollAnimation();
    window.onresize = () => screenAnimation();
  });
  return <Router>
    <Switch>
      <Route exact path={`${_ROUTES.home}`} component={Home} />
      <Route exact path={`${_ROUTES.home}:type/:name`} component={Detail} />
    </Switch>
  </Router>;
};

export default Routes;