import { ADD, UPDATE, REMOVE, GET } from "./actionTypes";

const Get = () => {
  console.log("I");
  return {
    type: GET
  };
};

const Add = (values) => {
  console.log("F");
  return {
    type: ADD,
    payload: values
  };
};

const Update = (values) => {
  console.log("G");
  return {
    type: UPDATE,
    payload: values
  };
};

const Remove = (values) => {
  console.log("H");
  return {
    type: REMOVE,
    payload: values
  };
};

export { Add, Update, Remove, Get };

// import {
//     GET_POSTS,
//     ADD_POST,
//     DELETE_POST,
//     UPDATE_POST
// } from "./actionTypes";

// export const getPosts = () => {
//     return {
//         type: GET_POSTS,
//     };
// };
// export const addPost = (data) => {
//     return {
//         type: ADD_POST, payload: data
//     };
// };
// export const updatePost = (data) => {
//     return {
//         type: UPDATE_POST, payload: data
//     };
// };
// export const deletePost = (id) => {
//     return {
//         type: DELETE_POST, payload: id
//     };
// };
