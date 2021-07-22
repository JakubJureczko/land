import React from "react";
import "./App.scss";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleSingle from "./components/ArticleSingle/ArticleSingle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./assets/img/blogging.png";

const App = (props) => {
  console.log(props);
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Link to="/">back</Link>
          <div className="app__logo">
            <img className="app__logo--img" src={logo} alt="" />
            <h3>BLOG</h3>
          </div>
        </div>
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <ArticleList />
            </Route>
            <Route path="/:id">
              <ArticleSingle />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
