import Link from "next/link"

const Home = () => {
  return <>
    <h1>Next Js pre-rendering</h1>
    <Link href="/users">
      Go to Users
    </Link>
    
  </>
}


export default Home