import React from "react";
import { BrowserRouter } from "react-router-dom";
// Браузер роутер обеспечивает загурзить с
// 
// Link создает html ссылку на страницу
// Route, который укажет маршруты.
// 
// И Router в котором будет храниться вся логика нашего роутинга. 
// Когда пользователь кликает на ссылку, этот компонент проверяет есть ли она в указанных роутах. 
// Если да, то роутер сменит URL в браузере и роут отрендерит заданный компонент.
// 
// Router должен быть родительским компонентом для Link и Route.

import ReactDOM from "react-dom";
// ReactDOM предоставляет вам доступ к высокоуровневым API-методам.
import "./index.css";
// Тут импортируем стили для
import App from "./App";
// Тут импортиреум главный файл App js (Это наша приложения)
import reportWebVitals from "./reportWebVitals";
// Этого не знаю
import store from "./redux/store";
import Provider from "react-redux";
export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider value={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>,

    document.getElementById("root")
  );
};
rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
reportWebVitals();
