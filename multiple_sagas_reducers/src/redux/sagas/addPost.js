import { put, call, takeLatest } from "redux-saga/effects";

import { ADD, ADD_SUCCESS } from "../actions/actionTypes";
import axios from "axios";

export function* addSaga() {
  yield takeLatest(ADD, getAdd);
}

export function* getAdd(action) {
  let data = yield call(() =>
    axios.post(
      `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/`,
      action.payload
    )
  );
  console.log("####data - ", data);

  yield put({ type: ADD_SUCCESS, data });
}

// import { all, put, call, takeEvery } from "redux-saga/effects";
// import * as actionType from "../actions/actionTypes";
// import postsblogPostApi from "../../server/api";

// export default function* addPostSaga() {
//   yield takeEvery(actionType.ADD_POST, addPost);
// }

// function* addPost(action) {
//   console.log(action);
//   try {
//     const postResponse = yield call(postsblogPostApi.add, action.payload);
//     yield put({ type: actionType.ADDED_POST, payload: postResponse });
//   } catch (err) {
//     console.log(err);
//   }
// }
