import React from "react";
import Post from "./Post/Post";
import { Input } from "semantic-ui-react";

const MyPosts = (props) => {
  // debugger;
  let state = props.posts;
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.AddPost();
  };
  let OnPostChange = () => {
    let text = newPostElement.current.inputRef.current.value;
    props.updateNewPostText(text);
  };
  // let onLikeChange = ()=>{
  //   let Like = LikeCount.current.value
  //   props.dispatch(ipdateNewLikeActionCreator(Like))
  // }
  // let text = newPostElement.current.value;

  return (
    <div>
      Напишите что нибудь
      <div>
        <Input
          value={props.newPostText}
          ref={newPostElement}
          onChange={OnPostChange}
          type="text"
          placeholder="Search..."
        />
        <br />
        {/* <input type="text" ref={LikeCount} onChange={onLikeChange} /> */}
        <button onClick={onAddPost} type="submit">
          Добавить
        </button>
      </div>
      <div>
        <Post profilePage={state} />
      </div>
    </div>
  );
};
export default MyPosts;
