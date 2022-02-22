import React from "react";
// import { NavLink } from "react-router-dom";
import "./dialogs.css";
import { UpdateNewMessageBodyCreator } from "../../redux/DialogsReducer";
import { sendMessageCreator } from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
const DialogsContainer = (props) => {
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
            UpdateNewMessageBodyCreator={onMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
