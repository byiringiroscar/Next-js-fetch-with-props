const UserList = ({ users }) => {
    return <>
        <h1>List of Users</h1>
        {
            users.map(user => {
                return <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
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