import { combineReducers, createStore } from "redux";
import ucer from "./ucer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
let reducers = combineReducers({
  dialogsPage: ucer,
  profilePage: ProfileReducer,
  sideBar: SideBarReducer,
});

// let store = createStore(reducers);
// export default store;

let StoreContext = createStore(reducers);
export default StoreContext;
