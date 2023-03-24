import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";

// import { getSaga, addSaga, removeSaga, updateSaga } from "./sagas/index";
import rootSaga from "./sagas/index";
const sagaMiddleWare = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware =
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(sagaMiddleWare), reduxDevTools)
    : applyMiddleware(sagaMiddleWare);

export const store = createStore(rootReducer, middleware);

sagaMiddleWare.run(rootSaga);
// sagaMiddleWare.run(getSaga);
// sagaMiddleWare.run(addSaga);
// sagaMiddleWare.run(updateSaga);
// sagaMiddleWare.run(removeSaga);
