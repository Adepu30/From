import { put, takeEvery, call } from "redux-saga/effects";

import { GET, GET_SUCCESS } from "../actions/actionTypes";
import axios from "axios";

export function* getSaga() {
  yield takeEvery(GET, get);
}

export function* get() {
  console.log("SAGA");

  let data = yield call(() =>
    axios
      .get(`https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log("******err - ", err))
  );
  yield put({ type: GET_SUCCESS, data: data });
}

// import { all, put, call, takeEvery } from "redux-saga/effects";
// import * as actionType from "../actions/actionTypes";
// import postsblogPostApi from "../../server/api";

// export default function* getPostsSaga() {
//     yield takeEvery(actionType.GET_POSTS, fetchPosts);
// }

// function* fetchPosts() {
//     try {
//         const postsResponse = yield call(postsblogPostApi.getAll);
//         yield put({ type: actionType.GOT_POSTS, payload: postsResponse });
//     } catch (err) {
//         console.log(err);
//     }
// }
