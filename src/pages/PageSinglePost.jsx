function PageSinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://json
placeholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, [id]);

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PageSinglePost;
