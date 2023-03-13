import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
// import {Add,Update,Remove} from './action'
import { ADD,ADD_SUCCESS, UPDATE,UPDATE_SUCCESS, REMOVE,REMOVE_SUCCESS, GET,GET_SUCCESS} from "./Constants";
import axios from "axios";

//put the value in action and will dispatch the value to action
//call
//takevery,takeLatest

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
  yield put({type:GET_SUCCESS,data:data})
}
   


export function* getAdd(action) {
  console.log("J");
  console.log(action.payload);
  try {
    let data = yield call(() =>
      axios.post(
        `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/`,
        action.payload
      )
    );
    console.log("####data - ", data);
    if (data) {
      yield put({ type: ADD_SUCCESS, data: data });
    }
  } catch (err) {
    console.log("########err - ", err);
  }
}

export function* getUpdate(action) {
  console.log("K");

    let data = yield call(()=>
      axios.put(
        `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/${action.payload.id}`,
        action.payload
      )
    );
    yield put({ type: UPDATE_SUCCESS, data:data });

}

export function* getRemove(action) {
  console.log("L");

  let data = yield call(()=>
    axios.delete(
      `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/${action.payload.id}`
    )
  );
  yield put({ type: REMOVE_SUCCESS, data:data });
}

export function* Saga() {
  console.log("N");
  yield takeEvery(GET, get);
  console.log("N1");
  yield takeLatest(ADD, getAdd);
  console.log("N2");
  yield takeLatest(UPDATE, getUpdate);
  console.log("N3");
  yield takeLatest(REMOVE, getRemove);
  console.log("N4");
}
