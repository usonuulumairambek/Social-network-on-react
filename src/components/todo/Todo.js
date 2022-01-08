import React, { useState } from "react";

function Todo() {
  const [auth, setauth] = useState(false);
  return (
    <div>
      <p>{auth ? "Привет, ты зашел" : "Привет, ты еще не зашел"}</p>
      <button onClick={()=> setauth(true)}>{auth ? "Войти" : "Выйти"}</button>
    </div>
  );
}

export default Todo;
