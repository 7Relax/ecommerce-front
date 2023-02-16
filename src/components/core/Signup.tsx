import Layout from "./Layout"
import { Button, Form, Input } from 'antd'
import { signup, SignupPayload } from "../../store/actions/auth.actions"
import { useDispatch } from "react-redux"

const Signup = () => {
  // 获取 dispatch 方法
  const dispatch = useDispatch()
  // 注册表单提交
  const onFinish = (values: SignupPayload) => {
    console.log('Success:', values)
    // 发送注册请求
    dispatch(signup(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <Layout title="注册" subTitle="还没有账号？注册一个吧.">
      <Form
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
    </Layout>
  )
}

export default Signup
