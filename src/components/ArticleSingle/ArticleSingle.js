import React, { useEffect, useState } from "react";
import { getPost, getComments } from "../../redux/actions/postsActions";
import { useParams, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addFavourite } from "../../redux/actions/favouriteActions";
import Button from "../atoms/Button/Button";

import "./ArticleSingle.scss";

const ArticleSingle = (props) => {
  let { id } = useParams();

  const [seeComments, setSeeComments] = useState(false);

  const post = props.posts.post;

  useEffect(() => {
    props.getPost(id);
    props.getComments(id);
  }, [id]);

  // console.log(props.posts.post);

  return (
    <>
      {props.posts.post && (
        <div className="single">
          {props.favourites && props.favourites.includes(id) && (
            <h4>Added to favourites</h4>
          )}
          <div className="single__post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
          <div className="single__btn">
            <Button
              title="Add to favourites"
              handleClick={() => props.addFavourite(id)}
            />
            <Button
              title={seeComments ? "Hide comments" : "See the comments"}
              handleClick={() => setSeeComments(!seeComments)}
            />
          </div>

          {props.posts.comments &&
            seeComments &&
            props.posts.comments.map((el) => (
              <div
                key={el.id}
                className={
                  seeComments ? "single__comments active" : "single__comments"
                }
              >
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
    favourites: state.favouriteReducer.favourites,
  };
};

export default connect(mapStateToProps, { getPost, getComments, addFavourite })(
  ArticleSingle
);
