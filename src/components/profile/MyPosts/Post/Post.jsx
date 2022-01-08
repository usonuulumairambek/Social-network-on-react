import React from "react";
import "./post.css";
const Post = (props) => {
  let data = props.profilePage;
  return (
    <div className="post_items">
      {data.map((i) => {
        return (
          <div className="post">
            <img src={i.src} alt="" />
            <span className="post__text" >{i.message}</span>
            <h2>Лайк: {i.likecount}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
