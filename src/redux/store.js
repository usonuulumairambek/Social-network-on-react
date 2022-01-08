  import DialogsReducer from "./DialogsReducer";
  import ProfileReducer from "./ProfileReducer";
  import SideBarReducer from "./SideBarReducer";
  let store = {
    _state: {
      profilePage: {
        posts: [
          {
            id: 2,
            message: "Как дела?",
            src: "https://cdn1.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sexy-afro-2-512.png",

            likecount: 333,
          },
        ],
        NewPosttext: "",
      },
      dialogsPage: {
        dialogs: [
          { id: 1, name: "Mairambek", patch: "dialog/1" },
          { id: 2, name: "alymbek", patch: "dialog/1" },
        ],
        messages: [
          { id: 4, message: "аа, круттооо" },
          { id: 12, message: "Ghbdtn" },
          { id: 4, message: "аа, круттооо" },
          { id: 12, message: "Ghbdtn" },
        ],
        newMessageBody: ''
      },
      sideBar: {},
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

    dispatch(action) {
      this._state.profilePage = ProfileReducer(this._state.profilePage, action);
      this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
      this._state.sideBar = SideBarReducer(this._state.sideBar, action);
      this._callSubscriber(this._state);
    },
  };
  window.store = store;
  export default store;
