import { combineReducers } from "redux";

import authSlice from "./reducers/authSlice";
import drawerSlice from "./reducers/drawerSlice";
import filterSlice from "./reducers/filterSlice";
import formSlice from "./reducers/formSlice";
import imgUploadSlice from "./reducers/imgUploadSlice";
import sidebarSlice from "./reducers/sidebarSlice";
import searchSlice from "./reducers/searchSlice";
import contentSlice from "./reducers/contentSlice";
import voteSlice from "./reducers/voteSlice";

export default combineReducers({
  sidebar: sidebarSlice,
  searchBar: searchSlice,
  filter: filterSlice,
  form: formSlice,
  image: imgUploadSlice,
  drawer: drawerSlice,
  auth: authSlice,
  content: contentSlice,
  vote: voteSlice,
});
