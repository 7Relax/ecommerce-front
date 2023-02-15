import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createHashHistory()

// routerMiddleware()：监听路由状态，当路由状态发生更改的时候去 dispatch 一个 action
const store = createStore(
  createRootReducer(history),
  applyMiddleware(routerMiddleware(history))
)

export default store
