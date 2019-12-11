import React from "react";
import "./Post.css";

const Post = ({ id, title, body }) => {
  return (
    <div className="postItem" key={id}>
      <div className="head">
        <span>{id}</span>
        <span>&nbsp;{title}</span>
      </div>
      <div className="body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
