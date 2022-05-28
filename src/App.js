import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Todo from "./components/todo/Todo";
import Lk from "./components/lk/Lk";
import Country from "./components/country/country";
import DialogsContainer from "./components/dialogs/DialogsContainer";
const App = () => {
  return (
    <div>
      <Header />
      <div className="main__app">
        <Navbar />
        <div>
          <Route exact path="/dialogs" render={() => <DialogsContainer />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/todo" render={() => <Todo />} />
          <Route exact path="/lk" render={() => <Lk />} />
          <Route exact path="/country" render={() => <Country />} />{" "}
          <Route exact path="/dialogs/12" render={() => <Country />} />
        </div>
      </div>
    </div>
  );
};
export default App;
