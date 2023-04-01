import Post from "./Post";
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jslaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <Post />
      <Post />
    </div>
  )
}

export default Posts;
