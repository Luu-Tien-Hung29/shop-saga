import { all, fork } from "redux-saga/effects";
import listSaga from "./saga";

function* mySaga() {
  yield all([fork(listSaga)]);
}
export default mySaga;
