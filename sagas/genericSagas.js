import { put, call } from "redux-saga/effects";

import { get, post, del, patch } from "api";

export function* fetchData({ payload }) {
  try {
    const {
      data: { data },
    } = yield call(get, payload);
    yield put({ type: payload.onSuccess, data });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}

export function* postData({ payload }) {
  try {
    const { data } = yield call(post, payload);
    yield put({ type: payload.onSuccess, data });
  } catch ({ response }) {
    yield put({ type: payload.onFailure, error: response });
  }
}

export function* deleteData({ payload }) {
  try {
    const { data } = yield call(del, payload);
    yield put({ type: payload.onSuccess, data });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}

export function* patchData({ payload }) {
  try {
    const { data } = yield call(patch, payload);
    yield put({ type: payload.onSuccess, data });
  } catch (error) {
    yield put({ type: payload.onFailure, error });
  }
}
