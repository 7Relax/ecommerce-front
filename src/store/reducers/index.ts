import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers } from 'redux'
import { History } from 'history'
import authReducer, { AuthState } from './auth.reducer'

export interface AppState {
  router: RouterState,
  auth: AuthState
}

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  auth: authReducer // 注意：reducer 函数的返回必须要有默认值，不可以是 undefined
})

export default createRootReducer
