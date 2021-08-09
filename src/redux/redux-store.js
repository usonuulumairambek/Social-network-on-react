import { combineReducers, createStore } from "redux";
import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
let reducers = combineReducers({
  DialogsReducer,
  ProfileReducer,
  SideBarReducer,
});

let store = createStore(reducers);
export default store;
