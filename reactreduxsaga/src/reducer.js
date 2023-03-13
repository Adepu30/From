import {
  ADD_SUCCESS,
  UPDATE_SUCCESS,
  REMOVE_SUCCESS,
  GET_SUCCESS,
} from "./Constants";

const reducer = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    // case GET:
    //   console.log("REDUCER");
    //   // let newData = [{ ...info, data: action.data }];
    //   // console.log(newData)
    //   return [{ ...action.data }];

    case GET_SUCCESS:
      return action.data;

    // case ADD:
    //   console.log("O");
    //   let infor = [{ ...info, data: action.payload }];
    //   return infor;
    // // return [action.payload];

    case ADD_SUCCESS:
      console.log("O");
      let infor = [...action.data];
      return infor;
    // return [action.payload];

    // case UPDATE:
    //   console.log("P");
    //   const index = info.findIndex((e) => e.id === action.payload.id);
    //   // const newInfo = info.map((e) => {
    //   //   if (e.id === action.payload.id) {
    //   //     e.name = action.payload.name;
    //   //     e.email = action.payload.email;
    //   //   }
    //   // });
    //   const newInfo = [
    //     ...info.slice(0, index),
    //     action.payload,
    //     ...info.slice(index + 1),
    //   ];

    //   return newInfo;

    case UPDATE_SUCCESS:
      console.log("P");
      const index = info.findIndex((e) => e.id === action.payload.id);
      // const newInfo = info.map((e) => {
      //   if (e.id === action.payload.id) {
      //     e.name = action.payload.name;
      //     e.email = action.payload.email;
      //   }
      // });
      const newInfo = [
        ...info.slice(0, index),
        action.payload,
        ...info.slice(index + 1),
      ];

      return newInfo;

    // case REMOVE:
    //   console.log("Q");
    //   const updated = info.filter((e) => e.id !== action.payload.id);
    //   return updated;

    case REMOVE_SUCCESS:
      console.log("Q");
      const updated = info.filter((e) => e.id !== action.payload.id);
      return updated;

    default:
      return info;
  }
};

export default reducer;
