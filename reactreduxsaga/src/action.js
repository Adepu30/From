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
  
  return {
    type: ADD,
    payload: values,
  };
};

const AddSuccess = (values) => {
  
  return {
    type: ADD_SUCCESS,
    payload: values,
  };
};

const Update = (values) => {
  
  return {
    type: UPDATE,
    payload: values,
  };
};

const UpdateSuccess = (values) => {
  
  return {
    type: UPDATE_SUCCESS,
    payload: values,
    
  };
};

const Remove = (values) => {
  
  return {
    type: REMOVE,
    payload: values,
  };
};

const RemoveSuccess = (values) => {
  
  return {
    type: REMOVE_SUCCESS,
    payload: values,
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
