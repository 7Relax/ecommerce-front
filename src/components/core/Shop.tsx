import { useSelector } from "react-redux"
import Layout from "./Layout"

const Shop = () => {
  const state = useSelector(state => state)
  return <Layout>{JSON.stringify(state)}Shop</Layout>
}

export default Shop
