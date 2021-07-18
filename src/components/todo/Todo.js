import React, { useState } from "react";

function Todo(props) {
  // // let name = "Mairambek";
  // let setAlert = (age) => {
  //   console.log(age);
  // };
  // const [state, setstate] = useState("");
  // let handlevalue = () => {
  //   state = prompt("crjk");
  //   let age = state
  //   setAlert(age)

  // };
  let handlevalue = ()=>{
    alert('вы успешно нажали на кнопку')
  }
  return (
    <div>
      <h1>Тодо лист без урокиов на ютуб</h1>
      <input type="text" />
      <button onClick={handlevalue}>Отправить</button>
    </div>
  );
}

export default Todo;
