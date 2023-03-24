import {
  // ADD,
  // UPDATE,
  // REMOVE,
  // GET,
  ADD_SUCCESS,
  ADD_FAILURE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  REMOVE_SUCCESS,
  REMOVE_FAILURE,
  GET_SUCCESS,
  GET_FAILURE,
} from "./Constants";

// import {Get} from "./Saga"

const reducer = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    // case GET:
    // console.log("REDUCER");
    // let newData = [{ ...info, data: action.data }];
    // console.log(newData)
    // return [{ ...action.data }];

    case GET_SUCCESS:
      return action.data;

    case GET_FAILURE:
      return "Error in Loading";

    // case ADD:
    //   console.log("O");
    //   let infor = [{ ...info, data: action.payload }];
    //   return infor;
    // return null;

    case ADD_SUCCESS:
      // let infor = [{ ...info, ...action.data }];
      // console.log(infor);
      // return (Get)
      const infor = action.data.data;
      // console.log(infor);
      return [...info, infor]; //[{...info, infor}]
    // return [action.payload];

    case ADD_FAILURE:
      // let infor = [{ ...info, ...action.data }];
      // console.log(infor);
      // return (Get)
      return [...info]; //[{...info, infor}]
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

    // return null;

    case UPDATE_SUCCESS:
      // console.log("P");

      const index = info.findIndex((e) => e.id === action.data.data.id);
      // const newInfo = info.map((e) => {
      //   if (e.id === action.payload.id) {
      //     e.name = action.payload.name;
      //     e.email = action.payload.email;
      //   }
      // });
      console.log(action.data.data);
      const newInfo = [
        ...info.slice(0, index),
        action.data.data,
        ...info.slice(index + 1),
      ];

      return newInfo;

    case UPDATE_FAILURE:
      return [...info];

    // return (Get)

    // case REMOVE:
    //   console.log("Q");
    //   const updated = info.filter((e) => e.id !== action.payload.id);
    // return null;

    case REMOVE_SUCCESS:
      // console.log("Q");
      // const updated = info.filter((e) => e.id !== action.data.id);
      return info.filter((e) => e.id !== action.data.data.id);
    // return (Get)

    case REMOVE_FAILURE:
      return [...info];
    default:
      return info;
  }
};


const reducer1 = (info = [], action) => {
  console.log(action);
  switch (action.type) {
    // case GET:
    // console.log("REDUCER");
    // let newData = [{ ...info, data: action.data }];
    // console.log(newData)
    // return [{ ...action.data }];

    case GET_SUCCESS:
      return action;

    
    case GET_FAILURE:
      return action;

    // case ADD:
    //   console.log("O");
    //   let infor = [{ ...info, data: action.payload }];
    //   return infor;
    // return null;

    case ADD_SUCCESS:
      // let infor = [{ ...info, ...action.data }];
      // console.log(infor);
      // return (Get)
      
      // console.log(infor);
      return action; //[{...info, infor}]
    // return [action.payload];

    case ADD_FAILURE:
      // let infor = [{ ...info, ...action.data }];
      // console.log(infor);
      // return (Get)
     ;
      // console.log(infor1);
      return  action; //[{...info, infor}]
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

    // return null;

    case UPDATE_SUCCESS:
      // console.log("P");

      // const index = info.findIndex((e) => e.id === action.data.id);
      // const newInfo = info.map((e) => {
      //   if (e.id === action.payload.id) {
      //     e.name = action.payload.name;
      //     e.email = action.payload.email;
      //   }
      // });
      console.log(action);
      // const newInfo = [
      //   ...info.slice(0, index),
      //   action.data,
      //   ...info.slice(index + 1),
      // ];

      return action;

    case UPDATE_FAILURE:
      return action;

    // return (Get)

    // case REMOVE:
    //   console.log("Q");
    //   const updated = info.filter((e) => e.id !== action.payload.id);
    // return null;

    case REMOVE_SUCCESS:
      // console.log("Q");
      // const updated = info.filter((e) => e.id !== action.data.id);
      return action;
    // return (Get)

    case REMOVE_FAILURE:
      return action;
    default:
      return info;
  }
};

export default reducer;
export {reducer1}
