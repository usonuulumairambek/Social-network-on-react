import React from "react";
import { rerenderEntireTree } from "../..";
function Todo() {
  let todoData = {
    text: "",
    setText(text1) {
      text1 = this.text;
    },
  };
  let onChangeText = (e) => {
    let text1 = e.target.value;
    todoData.setText(text1)
  };
  let onSubmit = () => {
    rerenderEntireTree()
  };
  console.log(todoData.text);
  return (
    <div>
      <h1>Тодо лист без урокиов на ютуб</h1>
      <input onChange={onChangeText} type="text" />
      <button onClick={onSubmit}>Отправить</button>
      <div>
        <p>
          {todoData.text}
        </p>
      </div>
    </div>
  );
}

export default Todo;
