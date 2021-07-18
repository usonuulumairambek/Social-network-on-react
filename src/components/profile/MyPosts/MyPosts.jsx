import React from "react";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let newPostElement = React.createRef();

  function AddPost() {
    let text = newPostElement.current.value;
    // alert(text)
    props.AddPost(text);
    props.UpdateNewPost(" ");
  }
  let OnPostChange = () => {
    let text = newPostElement.current.value;
    props.UpdateNewPost(text);
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
