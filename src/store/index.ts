import { applyMiddleware, createStore } from 'redux'
import createRootReducer from './reducers'
import { createHashHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { composeWithDevTools } from'redux-devtools-extension'

export const history = createHashHistory()

const sagaMiddleware = createSagaMiddleware()

// routerMiddleware()：监听路由状态，当路由状态发生更改的时候去 dispatch 一个 action
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store
