import { put, call, takeLatest } from "redux-saga/effects";

import { UPDATE, UPDATE_SUCCESS } from "../actions/actionTypes";
import axios from "axios";

export function* updateSaga() {
  yield takeLatest(UPDATE, getUpdate);
}

export function* getUpdate(action) {
  console.log("K");

  let data = yield call(() =>
    axios.put(
      `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/${action.payload.id}`,
      action.payload
    )
  );
  yield put({ type: UPDATE_SUCCESS, data });
}

// import { all, put, call, takeEvery } from "redux-saga/effects";
// import * as actionType from "../actions/actionTypes";
// import postsblogPostApi from "../../server/api";

// export default function* updatePostSaga() {
//     yield takeEvery(actionType.UPDATE_POST, updatePost);
// }

// function* updatePost(action) {
//     console.log(action)
//     try {
//         const postResponse = yield call(postsblogPostApi.update, action.payload);
//         yield put({ type: actionType.UPDATED_POST, payload: postResponse });
//     } catch (err) {
//         console.log(err);
//     }
// }
