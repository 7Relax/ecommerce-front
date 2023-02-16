import { AuthUnionType, SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL }
  from "../actions/auth.actions"

export interface AuthState {
  signup: {
    loaded: boolean,
    success: boolean
  }
}

const intialState: AuthState = {
  signup: {
    loaded: false,
    success: false
  }
}

export default function authReducer(state = intialState, action: AuthUnionType) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        signup: {
          loaded: false,
          success: false
        }
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loaded: true, // 请求已经结束了
          success: true // 请求成功了
        }
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signup: {
          loaded: true,
          success: false,
          message: action.message
        }
      }
  }
}