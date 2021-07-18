import React from "react";
import "./post.css"
const Post = (props) => {
  let w =  props.profilePage.posts.map((i, index) => {
 
    return (
      <div className="post_items">
        <img src={i.src} alt="" />
        <span>{index+1}</span><span> </span>
        <span>{i.message}</span>
      </div>
    );  
  })
  return (
    <div className="posts">
      {/* {props.posts.map((p) => { */}
      <div>
        <div>
         {w}
        </div>
      </div>

      {/* })} */}
    </div>
  );
};

export default Post;
