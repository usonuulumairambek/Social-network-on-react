// import React from "react";
// import "./dialogs.css";
// import { UpdateNewMessageBodyCreator } from "../../redux/ucer";
// import { sendMessageCreator } from "../../redux/ucer";
// import Dialogs from "./Dialogs";
// import { StoreContext } from "react-redux" ;
import Dialogs from "./Dialogs";
import React from "react";
import { UpdateNewMessageBodyCreator } from "./../../redux/DialogsReducer";
import { sendMessageCreator } from "../../redux/DialogsReducer";
import { StoreContext } from "./../../redux/redux-store";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;
        let onMessageChange = (body) => {
          store.dispatch(UpdateNewMessageBodyCreator(body));
        };
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
        return (
          <Dialogs
            UpdateNewMessageBody={onMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
