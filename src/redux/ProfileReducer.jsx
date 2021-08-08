const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ProfileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let text = {
        id: 2,
        message: state.NewPosttext,
        src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",
        likecount: 112,
      };
      state.posts.push(text);
      state.NewPosttext = " ";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.NewPosttext = action.newPost;
      return state;
    default:
      return state;
  }
};
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPost: text,
});
export let addPostActionCreator = () => ({ type: ADD_POST });

export default ProfileReducer;
