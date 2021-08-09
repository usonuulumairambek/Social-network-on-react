const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 1, message: body });
      return state;
    default:
      return state;
  }
};
export let sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export let UpdateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default DialogsReducer;
