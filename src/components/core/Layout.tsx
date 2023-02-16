import React, { FC } from "react"
import Navigation from "./Navigation"

interface Props {
  // children 是一个 React 元素
  children: React.ReactNode
}
// Layout 是一个函数型组件，用 FC 来表示
// FC 中指定的是 props 数据的类型
const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {/* {children} */}
    </div>
  )
}

export default Layout