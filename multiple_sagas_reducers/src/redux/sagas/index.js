//all,fork

import { all } from "redux-saga/effects";

import getSaga from "./getPosts";
import addSaga from "./addPost";
import removeSaga from "./deletePost";
import updateSaga from "./updatePost";

function* rootSaga() {
  yield all([getSaga()], [addSaga()], [removeSaga()], [updateSaga()]);
}

export default rootSaga;

// export { default as getSaga } from "./getPosts";
// export { default as addSaga } from "./addPost";
// export { default as removeSaga } from "./deletePost";
// export { default as updateSaga } from "./updatePost";
