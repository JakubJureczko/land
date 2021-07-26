import React from "react";
import { connect } from "react-redux";

import "../ArticleSingle/ArticleSingle.scss";

// import Bookmark from "../components/Bookmark";

const Favourites = (props) => {
  const uniqueFav = [...new Set(props.favourites)];

  function findSmiliar(ar1, ar2) {
    return ar1.filter((n) => {
      return ar2.indexOf(n) !== -1;
    });
  }

  const similar = findSmiliar(uniqueFav, props.favourites);
  const similarNumber = similar.map((e) => parseInt(e));

  const favouritesList = similarNumber.map((id) =>
    props.posts.find((o) => o.id === id)
  );

  return (
    <div>
      {/* {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} onDelete={onDelete} key={bookmark.id} />
      ))} */}
      {favouritesList.length === 0 && <h4>Add articles to favourites</h4>}
      {favouritesList.map((e) => (
        <div className="single__post">
          <h4>{e.title}</h4>
          <p>{e.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.postsReducer.posts,
    favourites: state.favouriteReducer.favourites,
  };
};

export default connect(mapStateToProps)(Favourites);
