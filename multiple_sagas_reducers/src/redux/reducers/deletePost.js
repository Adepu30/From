import { REMOVE_SUCCESS } from "../actions/actionTypes";

const deleteSuccess = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    case REMOVE_SUCCESS: {
      return info.filter((e) => e.id !== action.data.id);
    }

    default:
      return info;
  }
};

export default deleteSuccess;

// import * as actionType from "../actions/actionTypes";

// const initialState = {
//     post: null
// };

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case actionType.DELETED_POST: {
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
