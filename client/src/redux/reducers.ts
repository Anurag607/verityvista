import { combineReducers } from "redux";

import authSlice from "./reducers/authSlice";
import drawerSlice from "./reducers/drawerSlice";
import filterSlice from "./reducers/filterSlice";
import formSlice from "./reducers/formSlice";
import imgUploadSlice from "./reducers/imgUploadSlice";
import sidebarSlice from "./reducers/sidebarSlice";
import searchSlice from "./reducers/searchSlice";

export default combineReducers({
  sidebar: sidebarSlice,
  searchBar: searchSlice,
  filter: filterSlice,
  form: formSlice,
  image: imgUploadSlice,
  drawer: drawerSlice,
  auth: authSlice,
});
