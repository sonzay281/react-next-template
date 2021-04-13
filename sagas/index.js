//you may add takeLeading and takeEvery as per the requirements
import { takeLatest, debounce, takeLeading } from "redux-saga/effects";

import * as actions from "../actions";
import { fetchData, postData, patchData, deleteData } from "./genericSagas";

export default function* rootSaga() {
  yield debounce(1000, actions.VALIDATE_EMAIL, postData);

  //AUTH
  yield takeLatest(actions.USER_REGISTRATION, postData);
  yield takeLatest(actions.USER_LOGIN, postData);

  //yield takeLatest(<DELETEACTION>, deleteData);
}
