import { memo } from "react";
import type { Post as PostType } from "../types/Post.ts";
import "../styles/Post.css";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const isFeaturedAuthor = post.author === "John Doe";

  return (
    <article className={isFeaturedAuthor ? "post featured-post" : "post"}>
      {isFeaturedAuthor && <span className="badge">Featured Author</span>}

      <h2>{post.title}</h2>

      <p className="author">By {post.author}</p>

      <p>{post.content}</p>

      <p className="date">{post.date}</p>
    </article>
  );
}

export default memo(Post);