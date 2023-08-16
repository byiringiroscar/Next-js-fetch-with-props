const Post = ({ post }) => {
    return (
        <div>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}


export default Post;


export const getStaticProps = async(context) => {
    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();
    return {
        props: {
            post: data
        }
    }

}