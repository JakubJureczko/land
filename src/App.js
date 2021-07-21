import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getPosts } from "./redux/actions/postsActions";

function App(props) {
  useEffect(() => {
    props.getPosts();
  }, []);
  return (
    <div className="App">
      <h1>React Redux & Fake Rest API</h1>
      {props.posts.posts.map((post) => {
        return (
          <div key={post.id}>
            <p>Title: {post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    posts: state.postsReducer,
  };
};

export default connect(mapStateToProps, { getPosts })(App);
