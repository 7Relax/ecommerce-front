import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { AppState } from '../../store/reducers'
import { RouterState } from 'connected-react-router'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'

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
  {
    label: 'Dashboard',
    key: getDashboard(),
  },
]

function getDashboard() {
  let url = '/user/dashboard'
  if (isAuth()) {
    const { user: { role } } = isAuth() as Jwt
    if (role === 1) {
      url = '/admin/dashboard'
    }
  }
  return url
}


const handleItems = (val: boolean) => {
  items.forEach((item) => {
    // @ts-ignore
    if (item.key === '/signin' || item.key === '/signup') {
      // @ts-ignore
      item.disabled = val
    // @ts-ignore
  } else if (item.label === 'Dashboard') {
      // @ts-ignore
      item.disabled = !val
    }
  })
}

const handle = () => {
  if (isAuth()) {
    // 已登录
    handleItems(true)
  } else {
    // 未登录
    handleItems(false)
  }
}

const Navigation: React.FC = () => {
  // 处理Menu菜单
  handle()

  // AppState 是指定 state 的类型
  // RouterState 第二个泛型参数是指定回调函数的返回值类型，这样 router 就有类型了
  const router = useSelector<AppState, RouterState>(state => state.router)
  const pathname = router.location.pathname
  const [current, setCurrent] = useState(pathname)
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
    navigate(e.key)
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
