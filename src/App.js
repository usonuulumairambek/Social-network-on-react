import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/dialogs/Dialogs";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Todo from "./components/todo/Todo";
import Lk from "./components/lk/Lk";
import Country from "./components/country/country";
const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main__app">
          <Navbar />
          <div>
            <Route
              exact
              path="/dialogs"
              render={() => (
                <Dialogs
                  dialogsPage={props.state.dialogsPage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route
              exact
              path="/profile"
              render={() => (
                <Profile
                  store={props.store}
                  proFilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              )}
            />
            <Route exact path="/todo" render={() => <Todo />} />
            <Route exact path="/lk" render={() => <Lk />} />
            <Route exact path="/country" render={() => <Country />} />{" "}
            <Route exact path="/dialogs/12" render={() => <Country />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
