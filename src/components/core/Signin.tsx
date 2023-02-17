import Layout from './Layout'
import { Button, Form, Input, Result } from 'antd'
import { signin, SigninPayload } from '../../store/actions/auth.actions'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import { AuthState } from '../../store/reducers/auth.reducer'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import { Navigate } from 'react-router-dom'

const Signin = () => {

  // 获取 dispatch 方法
  const dispatch = useDispatch()

  // 表单提交
  const onFinish = (value: SigninPayload) => {
    // 发送登录请求 - 触发 signin 这个action
    dispatch(signin(value))
  }

  // 1. 获取登录结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  // 2. 登录失败 显示错误信息
  const showError = () => {
    if (auth.signin.loaded && !auth.signin.success) {
      return (
        <Result
          status="warning"
          title="登录失败"
          subTitle={auth.signin.message}
        />
      )
    }
  }

  // 3. 登录成功 根据角色跳转到对应的管理页面
  const redirectToDashboard = () => {
    const auth = isAuth()
    if (auth) {
      // 从 auth 中解构出 user, 然后再从 user 中解构出 role
      // 断言 auth 就是 Jwt
      const { user: { role } } = auth as Jwt
      if (role === 0) {
        // 注册用户
        return <Navigate to="/user/dashboard" />
      } else {
        // 管理员
        return <Navigate to="/admin/dashboard" />
      }
    }
  }

  // 返回表单form实例对象
  const [form] = Form.useForm()

  const signinForm = () => {
    return (
      <Form
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <Layout title="登录" subTitle="嘿，小伙伴，立即登录到开心电商系统吧">
      {showError()}
      {redirectToDashboard()}
      {signinForm()}
    </Layout>
  )
}

export default Signin
