import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { AppState } from '../../store/reducers'
import { RouterState } from 'connected-react-router'

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: '/',
  },
  {
    label: '商城',
    key: '/shop',
  },
  {
    label: '登录',
    key: '/signin',
  },
  {
    label: '注册',
    key: '/signup',
  },
]

const Navigation: React.FC = () => {
  // AppState 是指定 state 的类型
  // RouterState 第二个泛型参数是指定回调函数的返回值类型，这样 router 就有类型了
  const router = useSelector<AppState, RouterState>(state => state.router)
  const pathname = router.location.pathname

  const [current, setCurrent] = useState(pathname)

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
    router.location.pathname = e.key
  }

  return (
    <Menu
      mode="horizontal"
      items={items}
      onClick={onClick}
      selectedKeys={[current]} />
  )
}

export default Navigation
