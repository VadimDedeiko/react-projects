import Post from "./Post";
import React, { useEffect, useState } from "react";

const URI_API = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
//using throw IIFE
  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await fetch(URI_API);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  /*useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(URI_API)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])*/

  /*useEffect(() => {
    fetch(URI_API)
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts)
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);*/
  if (error) {
    return <p>Error {error}</p>;
  }
  return (
    <>
      <h1>Posts</h1>
      <hr></hr>
      {
        isLoading ? (<p>Loading...</p>) : (posts.map((post) => <Post key={post.id} {...post}></Post>))
      }
    </>
  );
}

export default Posts;
