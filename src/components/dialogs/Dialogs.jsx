import React from "react";
import { NavLink } from "react-router-dom";
import "./dialogs.css";
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
  let newMessageBody = props.dialogsPage.newMessageBody;
  let state = props.dialogsPage
  let onMessageChange = (e) => {
    let body = e.target.value;
    props.UpdateNewMessageBody(body);
  };
  let onSendMessageClick = () => {
    props.sendMessage();
  };
  return (
    <div className={"dialogs"}>
      <div className="dialogs__items">
        <DialogsItems />
      </div>
      <div className="messages">
        {props.dialogsPage.messages.map((e) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
