import React, { FC } from "react"
import Navigation from "./Navigation"
import { PageHeader } from '@ant-design/pro-components'

interface Props {
  // children 是一个 React 元素
  children: React.ReactNode,
  title: string,
  subTitle: string
}
// Layout 是一个函数型组件，用 FC 来表示
// FC 中指定的是 props 数据的类型
const Layout: FC<Props> = ({ children, title, subTitle }) => {
  return (
    <div>
      <Navigation />
      <PageHeader className="jumbotron" title={title} subTitle={subTitle}/>
      {children}
    </div>
  )
}

export default Layout
