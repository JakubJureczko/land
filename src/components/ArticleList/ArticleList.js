import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/postsActions";
import { Link } from "react-router-dom";

import "./ArticleList.scss";
import { useParams } from "react-router-dom";

const ArticleList = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.getPosts();
  }, []);

  console.log(props.posts.posts);

  return (
    <div className="list">
      {props.posts.length !== 0 &&
        props.posts.posts.map((el) => (
          <Link className="list__card" to={`/article/${el.id}`} key={el.id}>
            <div className="articleList">
              <h4>{el.title}</h4>
            </div>
          </Link>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.postsReducer,
  };
};

export default connect(mapStateToProps, { getPosts })(ArticleList);
