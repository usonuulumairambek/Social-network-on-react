import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";

// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE";

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
      NewPosttext: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Mairambek", patch: "dialog/1" },
        { id: 2, name: "alymbek", patch: "dialog/1" },
        { id: 3, name: "Aizat", patch: "dialog/1" },
        { id: 4, name: "Aruuzat", patch: "dialog/1" },
      ],
      messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Чем занимаешься?" },
        { id: 3, message: "програмирую" },
        { id: 4, message: "аа, классно" },
      ],
    },
    sideBar: {},
    newMessageBody: "",
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    alert("State изменен");
  },

  subscribe(observer) {
    this._callSubscriber = observer; // pattern
  },

  dispath(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = SideBarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};



export default store;
// let store {
//   state: g
// }
// window.store = store;
