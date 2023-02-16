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
  // auth: authReducer // 这里会报错-所以先注掉
})

export default createRootReducer
