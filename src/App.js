import React from "react";
import "./App.scss";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleSingle from "./components/ArticleSingle/ArticleSingle";
import Favourites from "./components/Favourites/Favourites";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./assets/img/blogging.png";

const App = (props) => {
  console.log(props);
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Link className="app__anchors" to="/land">
            <h4>HOME</h4>
          </Link>
          <div className="app__logo">
            <img className="app__logo--img" src={logo} alt="" />
            <h3>BLOG</h3>
          </div>
          <Link className="app__anchors" to="/land/favourites">
            <h3>FAVOURITES</h3>
          </Link>
        </div>
        <div className="app__body">
          <Switch>
            <Route exact path="/land">
              <ArticleList />
            </Route>
            <Route path="land/article/:id">
              <ArticleSingle />
            </Route>
            <Route path="land/favourites">
              <Favourites />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
