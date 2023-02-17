import { FC } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Navigate } from 'react-router-dom'

// @ts-ignore
interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>
}

const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    // @ts-ignore
    <Route {...rest} render={(props) => {
      const auth = isAuth()
      if (auth) {
        return <Component {...props} />
      }
      // 没登录就跳转到登录页面
      return <Navigate to="/signin" />
    }} />
  )
}

export default PrivateRoute
