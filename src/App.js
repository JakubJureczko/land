import React from "react";
import "./App.scss";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleSingle from "./components/ArticleSingle/ArticleSingle";
import Favourites from "./components/Favourites/Favourites";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import logo from "./assets/img/blogging.png";

const App = (props) => {
  console.log(props);
  return (
    <HashRouter basename="/">
      <div className="app">
        <div className="app__header">
          <Link className="app__anchors" to="/">
            <h4>HOME</h4>
          </Link>
          <div className="app__logo">
            <img className="app__logo--img" src={logo} alt="" />
            <h3>BLOG</h3>
          </div>
          <Link className="app__anchors" to="/favourites">
            <h3>FAVOURITES</h3>
          </Link>
        </div>
        <div className="app__body">
          <Switch>
            <Route exact path="/">
              <ArticleList />
            </Route>
            <Route path="/article/:id">
              <ArticleSingle />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
