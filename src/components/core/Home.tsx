import { useSelector } from "react-redux"
import Layout from "./Layout"

const Home = () => {
  const state = useSelector(state => state)
  return <Layout>{JSON.stringify(state)} Home</Layout>
}

export default Home
