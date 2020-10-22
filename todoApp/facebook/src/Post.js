import React from "react";
import PropTypes from "prop-types";

function Post({ id, title, deletePost }) {
  return (
    <div className="Post">
      <div className="Post__delete" onClick={() => deletePost(id)}>
        X
      </div>
      <div className="Post__title">{title}</div>
      <img
        className="Post__image"
        alt="img"
        src={`https://source.unsplash.com/random?sig=${id}`}
      />
    </div>
  );
}

Post.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
