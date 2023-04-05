
import { call,put,takeLatest} from 'redux-saga/effects'
import {request,getApi} from '../sever/apiStudent'
import {getDataSuccess} from './action'
import {getDataApi} from './contant'

function* getApiProduct(action){
  console.log('run');
  try {
     const data = yield call([request,()=>getApi("/products")]) 
     if(data){
      yield put(getDataSuccess(data)) 
     }
  } catch (error) {
    console.log(error);
  }
}

function* listSaga(){
  console.log('dsa: ', getDataApi);
  console.log(takeLatest(getDataApi, getApiProduct));
  yield takeLatest(getDataApi, getApiProduct)
}
export default listSaga