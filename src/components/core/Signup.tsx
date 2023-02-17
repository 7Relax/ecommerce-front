import Layout from "./Layout"
import { Button, Form, Input, Result } from 'antd'
import { resetSignup, signup, SignupPayload } from "../../store/actions/auth.actions"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../store/reducers"
import { AuthState } from "../../store/reducers/auth.reducer"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Signup = () => {

  // 获取 dispatch 方法
  const dispatch = useDispatch()

  // 注册表单提交
  const onFinish = (value: SignupPayload) => {
    // 发送注册请求
    dispatch(signup(value))
  }

  // 获取注册结果
  const auth = useSelector<AppState, AuthState>(state => state.auth)

  // 返回表单form实例对象
  const [form] = Form.useForm()

  // 1. 注册成功 清空表单 - 监听 auth 状态
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields()
    }
  }, [auth, form])

  // 2. 注册成功 显示成功的提示信息
  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary"><Link to="/signin">登录</Link></Button>
          ]}
        />
      )
    }
  }

  // 3. 注册失败 显示失败的提示信息
  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return (
        <Result
          status="warning"
          title="注册失败"
          subTitle={auth.signup.message}
        />
      )
    }
  }

  // 4. 离开页面之前 重置状态
  useEffect(() => {
    return () => {
      dispatch(resetSignup())
    }
  }, [])

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  const signupForm = () => {
    return (
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="昵称" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>

        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>
      </Form>
    )
  }

  return (
    <Layout title="注册" subTitle="还没有账号？注册一个吧.">
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  )
}

export default Signup
