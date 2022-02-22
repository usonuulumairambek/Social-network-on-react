import React from "react";
import { updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
// import { addPostActionCreator } from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
// import store from "../../../redux/store";
// import { ipdateNewLikeActionCreator } from "../../../redux/ProfileReducer";
const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let AddPost = () => {
          let text = store.getState().profilePage.NewPosttext;
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        let OnPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
          // store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <MyPosts
            AddPost={AddPost}
            updateNewPostText={OnPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.NewPosttext}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyPostsContainer;
