import { useRouter } from "next/router";
import User from "@/components/user";


const UserList = ({ users }) => {
    const router = useRouter()
    return <>
        <h1>List of Users</h1>
        <button onClick={() => router.push('/')}>Go Home</button>
        {
            users.map(user => {
                return <div key={user.id}>
                    <User user={user} />
                </div>
            }
            )
        }
    </>
}


export default UserList;

export const getStaticProps = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data
        }
    }
}