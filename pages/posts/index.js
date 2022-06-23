import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getPosts } from "../../services";
export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  return <Layout>posts</Layout>;
}
