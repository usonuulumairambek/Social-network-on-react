import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
        <MyPostsContainer />
    </div>
  );
};
export default Profile;
