import Layout from './Layout'
import { Button, Form, Input } from 'antd'
import { signin, SigninPayload } from '../../store/actions/auth.actions'
import { useDispatch } from 'react-redux'

const Signin = () => {

  // 获取 dispatch 方法
  const dispatch = useDispatch()

  // 表单提交
  const onFinish = (value: SigninPayload) => {
    // 发送登录请求 - 触发 signin 这个action
    dispatch(signin(value))
  }

  // 返回表单form实例对象
  const [form] = Form.useForm()

  return (
    <Layout title="登录" subTitle="">
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
    </Layout>
  )
}

export default Signin
