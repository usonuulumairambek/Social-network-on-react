import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import { updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import { addPostActionCreator } from "../../../redux/ProfileReducer";
const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let AddPost = () => {
          let text = store.getState().profilePage.NewPosttext;
          let newtext = text.split(" ").join(' | ');
          console.log(newtext);
          store.dispatch(addPostActionCreator(text));
          //
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
