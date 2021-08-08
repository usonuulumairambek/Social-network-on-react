import React from "react";
import Post from "./Post/Post";
import { updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import { addPostActionCreator } from "../../../redux/ProfileReducer";
const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let OnPostChange = () => {
    let text = newPostElement.current.value;
    props.dispath(updateNewPostTextActionCreator(text));
  };

  let AddPost = () => {
    props.dispath(addPostActionCreator());
  };

  return (
    <div>
      Напишите что нибудь
      <input ref={newPostElement} onChange={OnPostChange} type="text" />
      <button onClick={AddPost} type="submit">
        Добавить
      </button>
      <div>
        <Post profilePage={props.profilePage} />
      </div>
    </div>
  );
};
export default MyPosts;
