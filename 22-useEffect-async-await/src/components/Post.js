import './Post.css'
function Post(props) {
  const { id, title, userId, body } = props;
  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <p>User ID: {userId}</p>
      <h2>{body}</h2>
    </div>
  );
}

export default Post;
