const PostList = ({ posts }) => {
    return (
        <>
            <h1>List of Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.id}  {post.title}</h3>
                </div>
            ))}
        </>
    )
}

export default PostList;



export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return {
        props: { posts: data.slice(0, 3) }
    }
}