import React from "react";
import { NavLink } from "react-router-dom";
import {sendMessageCreator} from "./../../redux/DialogsReducer"
import {UpdateNewMessageBodyCreator} from "./../../redux/DialogsReducer"

import "./dialogs.css";
// const GialogsItems = (props) => {
//   let path = "/dialogs/" + props.id;
//   return (
//     <div className="dialog">
//       <NavLink to={path}>{props.dialogs.name}</NavLink>
//     </div>
//   );
// };
// const Message = (props) => {
//   console.log(props.store);
//   return (

//   );
// };

const Dialogs = (store) => {
  let state = store.store;
  let onTextChange = (e) => {
    let body = e.target.value;
    state.dispath(UpdateNewMessageBodyCreator(body));
  };
  let onSendMessageClick = (e) => {
    state.dispath(sendMessageCreator());
  };
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        <div>
          {state.getState().dialogsPage.dialogs.map((item) => {
            return (
              <div>
                <NavLink to={item.patch}>{item.name}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <div className="messages">
        {/* <Message message={props.messages} /> */}
        <div className="message">
          {state.getState().dialogsPage.messages.map((item) => {
            return (
              <div>
                <p>{item.message}</p>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <textarea
              value={state.getState().dialogsPage.dialogs.newMessageBody}
              onChange={onTextChange}
              type="text"
            />
          </div>
          <div>
            <button type="submit" onClick={onSendMessageClick}>
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
