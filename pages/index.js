import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  return <>
    <h1>Next Js pre-rendering</h1>
    <button onClick={() => router.push('/users')}>Users</button>
  </>
}


export default Home