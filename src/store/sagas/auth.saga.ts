import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { API } from '../../config'
import {
  SIGNUP, SignupAction, signupSuccess, signupFail,
  SIGNIN, SigninAction, signinSuccess, signinFail, } from '../actions/auth.actions'

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

function * hanleSignin(action: SigninAction) {
  try {
    // 登录成功要将 令牌 和 用户信息 保存在本地
    // @ts-ignore
    const response = yield axios.post(`${API}/signin`, action.payload)
    localStorage.setItem('jwt', JSON.stringify(response.data))
    // 触发成功的action，改变 reducer 的状态
    yield put(signinSuccess())
  } catch (error) {
    // 请求失败
    // @ts-ignore
    yield put(signinFail(error.response.data.error))
  }
}

export default function * authSaga() {
  // 注册
  yield takeEvery(SIGNUP, hanleSignup)
  // 登录
  yield takeEvery(SIGNIN, hanleSignin)
}
