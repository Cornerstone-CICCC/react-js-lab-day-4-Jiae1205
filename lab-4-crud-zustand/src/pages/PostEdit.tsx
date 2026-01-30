import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePostStore } from "../store/post.store";

export default function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getPostById = usePostStore((s) => s.getPostById);
  const updatePost = usePostStore((s) => s.updatePost);

  const post = useMemo(() => (id ? getPostById(id) : undefined), [id, getPostById]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post && !post.isDeleted) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!post || post.isDeleted) {
    return (
      <div style={{ padding: 16 }}>
        <h1>Post not found</h1>
        <button onClick={() => navigate("/posts")}>Back</button>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePost(post.id, { title: title.trim(), content: content.trim() });
    navigate(`/posts/${post.id}`);
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>Edit Post</h1>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 8, maxWidth: 520 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={6}
          required
        />
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
