import {
  ADD,
  ADD_SUCCESS,
  UPDATE,
  UPDATE_SUCCESS,
  REMOVE,
  REMOVE_SUCCESS,
  GET,
  GET_SUCCESS,
} from "./Constants";

const Get = () => {
  console.log("I");
  return {
    type: GET,
  };
};

const GetSuccess = () => {
  return {
    type: GET_SUCCESS,
  };
};

const Add = (values) => {
  console.log("F");
  return {
    type: ADD,
    payload: values,
  };
};

const AddSuccess = () => {
  console.log("F");
  return {
    type: ADD_SUCCESS,
  };
};

const Update = (values) => {
  console.log("G");
  return {
    type: UPDATE,
    payload: values,
  };
};

const UpdateSuccess = () => {
  console.log("G");
  return {
    type: UPDATE_SUCCESS,
    
  };
};

const Remove = (values) => {
  console.log("H");
  return {
    type: REMOVE,
    payload: values,
  };
};

const RemoveSuccess = () => {
  console.log("H");
  return {
    type: REMOVE_SUCCESS,
  };
};

export {
  Add,
  AddSuccess,
  Update,
  UpdateSuccess,
  Remove,
  RemoveSuccess,
  Get,
  GetSuccess,
};
