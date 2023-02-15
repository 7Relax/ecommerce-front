// 初始化路由
import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./components/core/Home"
import Shop from "./components/core/Shop"

const R = () => {
  // 注意：react router v6 不再支持 exact
  // v5 - <Route exact path="/" component={Home} />
  // v6 - <Route path="/" element={<Home />} />
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  )
}

export default R
