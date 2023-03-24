import { put, call, takeLatest } from "redux-saga/effects";

import { REMOVE, REMOVE_SUCCESS } from "../actions/actionTypes";
import axios from "axios";

export function* removeSaga() {
  yield takeLatest(REMOVE, getRemove);
}

export function* getRemove(action) {
  console.log("L");

  let data = yield call(() =>
    axios.delete(
      `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/${action.payload.id}`
    )
  );
  yield put({ type: REMOVE_SUCCESS, data });
}

// import { all, put, call, takeEvery } from "redux-saga/effects";
// import * as actionType from "../actions/actionTypes";
// import postsblogPostApi from "../../server/api";

// export default function* deletePostSaga() {
//   yield takeEvery(actionType.DELETE_POST, deletePost);
// }

// function* deletePost(action) {
//   console.log(action);
//   try {
//     const postResponse = yield call(postsblogPostApi.delete, action.payload);
//     yield put({ type: actionType.DELETED_POST, payload: postResponse });
//   } catch (err) {
//     console.log(err);
//   }
// }
