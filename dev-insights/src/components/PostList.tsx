import Post from "./Post";
import type { Post as PostType } from "../types/Post.ts";
import withLogger from "../hoc/withLogger.tsx";
import "../styles/PostList.css";

const posts: PostType[] = [
  {
    id: 1,
    title: "Understanding React Components",
    author: "Muganza Daniel",
    content:
      "React components are reusable building blocks for creating user interfaces.",
    date: "September 20, 2026",
  },
  {
    id: 2,
    title: "Getting Started with TypeScript",
    author: "Mugisha Daniel Smith",
    content:
      "TypeScript adds static typing to JavaScript and helps developers catch errors early.",
    date: "September 21, 2021",
  },
  {
    id: 3,
    title: "Why Developers Use Vite",
    author: "Bugingo David",
    content:
      "Vite provides a fast development environment for modern web applications.",
    date: "September 22, 2022",
  },
  {
    id: 4,
    title: "Exploring React Hooks",
    author: "Francis Oganuwa",
    content:
      "React Hooks allow you to use state and other React features without writing a class.",
    date: "September 23, 2024",
  },
];

function PostList() {
  return (
    <main className="post-list">
      <h1>Latest Posts</h1>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default withLogger(PostList, "PostList");