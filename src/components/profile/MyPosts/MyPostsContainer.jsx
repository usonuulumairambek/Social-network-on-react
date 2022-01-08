import React from "react";
import { updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import { addPostActionCreator } from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
// import { ipdateNewLikeActionCreator } from "../../../redux/ProfileReducer";
const MyPostsContainer = (props) => {
  let AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let OnPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
    // props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      AddPost={AddPost}
      updateNewPostText={OnPostChange}
      posts={props.proFilePage.posts}
      newPostText={ props.proFilePage.NewPosttext }
    />
  );
};
export default MyPostsContainer;
