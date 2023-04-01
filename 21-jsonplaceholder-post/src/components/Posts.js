import Post from "./Post";
import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts)
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return <p>Error {error}</p>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr></hr>
        {
          isLoading ? (<p>Loading...</p>) : (posts.map((post) =><Post key={post.id} {...post}></Post>))
        }
    </>
  );
}

export default Posts;
