import Post from "./Post";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('');
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts)
      }).catch((err) => setError(err.message));
  }, []);
  if (error) {
    return <p>Error {error}</p>;
  }
  return (
    <div>
      {
        posts.map((post) =>
          (<Post key={post.id} {...post}></Post>)
        )
      }
    </div>
  );
}

export default Posts;
