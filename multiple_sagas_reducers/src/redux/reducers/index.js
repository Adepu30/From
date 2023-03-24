import { combineReducers } from "redux";

import addSuccess from "./addPost";
import getSuccess from "./getPosts";
import updateSuccess from "./updatePost";
import deleteSuccess from "./deletePost";

export default combineReducers({
  addSuccess,
  getSuccess,
  updateSuccess,
  deleteSuccess
});
