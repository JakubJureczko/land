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
    <>
      {props.posts.length !== 0 &&
        props.posts.posts.map((el) => (
          <Link to={`/${el.id}`} key={el.id}>
            <div className="articleList">
              <p>
                {el.id} {el.title}
              </p>
            </div>
          </Link>
        ))}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.postsReducer,
  };
};

export default connect(mapStateToProps, { getPosts })(ArticleList);
