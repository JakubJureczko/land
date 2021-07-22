import React, { useEffect } from "react";
import { getPost, getComments } from "../../redux/actions/postsActions";
import { useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Button from "../atoms/Button/Button";

import "./ArticleSingle.scss";

const ArticleSingle = (props) => {
  let { id } = useParams();

  useEffect(() => {
    props.getPost(id);
    props.getComments(id);
  }, [id]);

  console.log(props.posts.post);

  const post = props.posts.post;

  return (
    <>
      {props.posts.post && (
        <div className="single">
          <div className="single__post">
            {/* <p>{id}</p> */}
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
          <div className="single__btn">
            <Button title="Add to favourites" />
            <Button title="See the comments" />
          </div>

          {props.posts.comments &&
            props.posts.comments.map((el) => (
              <div key={el.id} className="single__comments">
                <div className="single__comments--header">
                  <div className="header-flex name">
                    <p>name:</p>
                    <h5>{el.name}</h5>
                  </div>
                  <div className="header-flex email">
                    <p>email:</p>
                    <h5>{el.email}</h5>
                  </div>
                </div>
                <p>{el.body}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.postsReducer,
  };
};

export default connect(mapStateToProps, { getPost, getComments })(
  ArticleSingle
);
