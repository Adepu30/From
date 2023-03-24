import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
// import {Add,Update,Remove} from './action'
import {
  ADD,
  ADD_SUCCESS,
  ADD_FAILURE,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  REMOVE,
  REMOVE_SUCCESS,
  REMOVE_FAILURE,
  GET,
  GET_SUCCESS,
  GET_FAILURE,
} from "./Constants";
import axios from "axios";

//put the value in action and will dispatch the value to action
//call
//takevery,takeLatest

export function* get() {
  try {
    const response = yield call(() =>
      axios.get(`https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/`)
    );
console.log(response)
    if (response.status === 200) {
      yield put({ type: GET_SUCCESS, data: response.data });
      
    } else {
      yield call(window.alert,`Recieved a ${response.status} status code`);
    }
  } catch (error) {
    yield put({ type: GET_FAILURE, error });
    // yield call(window.alert,`Error in loading the data please try again`);
  }
}

function* getAdd(action) {
  try {
    const response = yield call(() =>
      axios.post(
        `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/`,
        action.payload
      )
    );

    if (response.status === 201) {
      // yield put({ type: ADD_SUCCESS, data: response.data});
      yield put({ type: ADD_SUCCESS, data: response});
      // yield call(window.alert,`Data Added Succesfully`);
    } else {
      yield call(window.alert,`Recieved a ${response.status} status code`);
    }
  } catch (error) {
    yield put({ type: ADD_FAILURE, error });
    // yield call(window.alert,`Error in adding data please try again`);
  }
}

function* getUpdate(action) {
  try {
    const response = yield call(() =>
      axios.put(
        `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/${action.payload.id}`,
        action.payload
      )
    );
    if (response.status === 200) {
      // yield put({ type: UPDATE_SUCCESS, data: response.data });
      yield put({ type: UPDATE_SUCCESS, data: response });
      // yield call(window.alert,`Data Updated Succesfully`);
    } else {
      console.log(`Recieved a ${response.status} status code`);
    }
  } catch (error) {
    yield put({ type: UPDATE_FAILURE, error });
    // yield call(window.alert,`Error in updating data please try again`);
  }
}

function* getRemove(action) {
  try {
    const response = yield call(() =>
      axios.delete(
        `https://63db5e89b8e69785e4808146.mockapi.io/CRUDSAGA/${action.payload.id}`
      )
    );
    if (response.status === 200) {
      // yield put({ type: REMOVE_SUCCESS, data: response.data });
      yield put({ type: REMOVE_SUCCESS, data: response });
    //   yield call(window.alert,`Data Deleted Succesfully`);
    } else {
      console.log(`Recieved a ${response.status} status code`);

    } 
  } catch (error) {
    yield put({ type: REMOVE_FAILURE, error });
    // yield call(window.alert,`Error in deleting data please try again`);
  }
}

export function* Saga() {
  yield takeEvery(GET, get);
  yield takeEvery(ADD, getAdd);
  yield takeLatest(UPDATE, getUpdate);
  yield takeLatest(REMOVE, getRemove);
}
