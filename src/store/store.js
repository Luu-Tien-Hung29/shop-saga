import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware}  from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
import mySaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(reducer,composedEnhancers)
sagaMiddleware.run(mySaga)
export default store