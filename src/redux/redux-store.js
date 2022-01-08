import { combineReducers, createStore } from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
let reducers = combineReducers({
  dialogsPage: DialogsReducer,
  profilePage: ProfileReducer,
  sideBar: SideBarReducer,
});

let store = createStore(reducers);
export default store;
