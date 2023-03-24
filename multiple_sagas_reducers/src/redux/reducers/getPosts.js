import { GET_SUCCESS } from "../actions/actionTypes";

const getSuccess = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    case GET_SUCCESS: {
      console.log(action.data);
      return action.data;
    }

    default:
      return info;
  }
};

export default getSuccess;

// import * as actionType from "../actions/actionTypes";

// const initialState = {
//   posts: []
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case actionType.GOT_POSTS: {
//       return {
//         ...state,
//         posts: action.payload,
//       };
//     }
//     default: {
//       return { ...state };
//     }
//   }
// }
