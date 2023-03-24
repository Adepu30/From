import {createStore,applyMiddleware} from 'redux'
// import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
// import { composeWithDevTools } from 'redux-devtools-extension'



let sagaMiddleware=createSagaMiddleware()

const Store=createStore(
    rootReducer,
    // middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
    applyMiddleware(sagaMiddleware),window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_()
    // applyMiddleware(sagaMiddleware)
  )
  
sagaMiddleware.run(rootSaga)

export default Store