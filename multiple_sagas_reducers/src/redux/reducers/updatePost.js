import { UPDATE_SUCCESS } from "../actions/actionTypes";

const updateSuccess = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_SUCCESS: {
      const index = info.findIndex((e) => e.id === action.data.id);
      return [
        ...info.slice(0, index),
        action.payload,
        ...info.slice(index + 1)
      ];
    }

    default:
      return info;
  }
};

export default updateSuccess;

// import * as actionType from "../actions/actionTypes";

// const initialState = {
//     post: null
// };
// export default function (state = initialState, action) {
//     switch (action.type) {
//         case actionType.UPDATED_POST: {
//             return {
//                 ...state,
//                 post: action.payload
//             };
//         }
//         default: {
//             return { ...state };
//         }
//     }
// }
