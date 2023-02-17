import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { API } from '../../config'
import { SIGNUP, SignupAction, signupFail, signupSuccess }
  from '../actions/auth.actions'

function * hanleSignup(action: SignupAction) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(signupSuccess())
  } catch (error) {
    // 请求失败
    // @ts-ignore
    yield put(signupFail(error.response.data.error))
  }
}

export default function * authSaga() {
  yield takeEvery(SIGNUP, hanleSignup)
}
