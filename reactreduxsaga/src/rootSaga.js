//all,fork

import {all,fork} from 'redux-saga/effects'

import {Saga} from './Saga'


export default function* rootSaga(){
    
    yield all([Saga()])
}

// export default rootSaga