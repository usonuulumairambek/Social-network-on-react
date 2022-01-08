import React from "react";
import Post from "./Post/Post";
import { updateNewPostTextActionCreator } from "../../../redux/ProfileReducer";
import { addPostActionCreator } from "../../../redux/ProfileReducer";
// import { ipdateNewLikeActionCreator } from "../../../redux/ProfileReducer";
const MyPosts = (props) => {
  debugger
  let state = props.posts;
  let newPostElement = React.createRef();
  // let LikeCount = React.createRef();
  // let postsElements = props.dispatch().map(() => {});
  let AddPost = () => {
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = "";
  };
  let OnPostChange = () => {
    let text = newPostElement.current.value;

    // props.dispatch(updateNewPostTextActionCreator(text));
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
        <textarea
          value={props.newPostText}
          ref={newPostElement}
          onChange={OnPostChange}
          type="text"
        ></textarea>{" "}
        <br />
        {/* <input type="text" ref={LikeCount} onChange={onLikeChange} /> */}
        <button onClick={AddPost} type="submit">
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
