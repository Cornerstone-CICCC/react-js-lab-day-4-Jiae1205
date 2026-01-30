import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { usePostStore } from "../store/post.store";

export default function PostNew() {
  const navigate = useNavigate();
  const addPost = usePostStore((s) => s.addPost);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addPost({
      id: uuid(),
      title: title.trim(),
      content: content.trim(),
      isDeleted: false,
    });

    navigate("/posts");
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>New Post</h1>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8, maxWidth: 520 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="content"
          rows={6}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
