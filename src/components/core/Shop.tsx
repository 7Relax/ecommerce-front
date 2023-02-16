import { useSelector } from "react-redux"
import Layout from "./Layout"

const Shop = () => {
  const state = useSelector(state => state)
  return (
    <Layout
      title="天天商城"
      subTitle="挑选你喜欢的商品吧">
        Shop
    </Layout>
  )
}

export default Shop
