let rerendeEntireTree = ()=>{
  console.log("state chanded");
}
let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Привет",
          src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",
          likecount: 12,
        },
        {
          id: 2,
          message: "Это просто текст",
          src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",

          likecount: 112,
        },
        {
          id: 2,
          message: "Как дела?",
          src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",

          likecount: 112,
        },
        {
          id: 2,
          message: "У меня все хорошо, у тебя как?",
          src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",

          likecount: 112,
        },
      ],
      NewPosttext: "sasa",
    },
    dialogs: [
      { id: 1, name: "Mairambek", patch: "dialog/1" },
      { id: 2, name: "alymbek", patch: "dialog/1" },
      { id: 3, name: "Aizat", patch: "dialog/1" },
      { id: 4, name: "Aruuzat", patch: "dialog/1" },
    ],
    messages: [
      { id: 1, message: "Май" },
      { id: 2, message: "how are you?" },
      { id: 3, message: "yooo" },
      { id: 4, message: "0" },
    ],
  },
  _callSubscriber() {
    alert("State изменен");
  },
  getState() {
    return this._state;
  },
  AddPost() {
    debugger;
    let newPost = {
      id: 2,
      message: this.NewPosttext,
      src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",

      likecount: 112,
    };
    this.getState().profilePage.NewPosttext = " ";
    this.getState().profilePage.posts.push(newPost);
    rerendeEntireTree();
  },
  UpdateNewPost(newPost) {
    this.profilePage.NewPosttext = newPost;
    rerendeEntireTree();
  },
  subscribe(observer) {
    rerendeEntireTree = observer; // pattern
  },
};
export default store;
// let store {
//   state: g
// }
// window.store = store;


















