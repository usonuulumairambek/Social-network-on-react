import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
let Profile = (props) => {
  return (
    <div className="profile">
     <ProfileInfo />
     <MyPosts posts={props.posts} UpdateNewPost={props.UpdateNewPost} AddPost ={props.AddPost}  profilePage={props.profilePage} />
    </div>
  );
};
export default Profile;
