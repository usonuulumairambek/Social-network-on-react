import constants from "./Constants.js";
let initialState = {
  posts: [
    {
      id: 1,
      message: "Привет",
      src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",
      likecount: 12,
    },
  ],
  NewPosttext: "",
};
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_POST:
      let text = {
        id: 2,
        message: state.NewPosttext,
        src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",
        likecount: 0,
      };
      state.posts.push(text);
      state.NewPosttext = "";
      // console.log(state);
      return state;
    case constants.UPDATE_NEW_POST_TEXT:
      state.NewPosttext = action.newPost;
      return state;
    case constants.UPDATE_NEW_LIKE:
      state.likecount = action.LikeCount;
      return state;

    default:
      return state;
  }
};

export let updateNewPostTextActionCreator = (text) => ({
  type: constants.UPDATE_NEW_POST_TEXT,
  newPost: text,
});

export let addPostActionCreator = (text) => ({
  type: constants.ADD_POST,
  newPost: text,
});
export let updateNewLikeActionCreator = (Like) => ({
  type: constants.UPDATE_NEW_LIKE,
  LikeCount: Like,
});
export default ProfileReducer;
