import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = (props) => {
  debugger
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        posts={props.dispatch}
        dispatch={props.dispatch}
        proFilePage={props.proFilePage}
      />
    </div>
  );
};
export default Profile;
