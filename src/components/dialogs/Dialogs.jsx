import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./dialogs.css";
import { UpdateNewMessageBodyCreator } from "./../../redux/DialogsReducer";
import { sendMessageCreator } from "./../../redux/DialogsReducer";
const DialogsItems = () => {
  let path = "/dialogs/" + 12;
  return (
    <div className="dialog">
      <NavLink to={path}>dsds</NavLink>
      <NavLink to={path}>ds</NavLink>
    </div>
  );
};
const Dialogs = (props) => {
  const [header, setheader] = useState(true);
  let newMessageBody = props.dialogsPage.newMessageBody;
  let state = props.dialogsPage.messages;

  let setHeader = () => {
    setheader(header ? false : true);
  };

  let onMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(UpdateNewMessageBodyCreator(body));
  };
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };
  return (
    <div className={header ? "dialogs" : "dialogs-black"}>
      <div className="dialogs__items">
        <DialogsItems />
      </div>
      <div className="messages">
        {state.map((e) => {
          return <div className="message">{e.message}</div>;
        })}
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onMessageChange}
              type="text"
            />
          </div>
          <div>
            <button type="submit" onClick={onSendMessageClick}>
              Добавить
            </button>
            <button onClick={setHeader}>Изменить цвет dialogs</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
