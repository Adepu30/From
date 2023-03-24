import { ADD_SUCCESS } from "../actions/actionTypes";

const addSuccess = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_SUCCESS: {
      return [{ ...info, ...action.data }];
    }

    default:
      return info;
  }
};

export default addSuccess;

// import * as actionType from "../actions/actionTypes";

// const initialState = {
//   post: null
// };
// export default function (state = initialState, action) {
//   switch (action.type) {
//     case actionType.ADDED_POST: {
//       return {
//         ...state,
//         post: action.payload
//       };
//     }
//     default: {
//       return { ...state };
//     }
//   }
// }
