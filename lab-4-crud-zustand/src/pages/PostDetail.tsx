import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { usePostStore } from "../store/post.store";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getPostById = usePostStore((s) => s.getPostById);
  const softDeletePost = usePostStore((s) => s.softDeletePost);

  const post = useMemo(() => (id ? getPostById(id) : undefined), [id, getPostById]);

  if (!post || post.isDeleted) {
    return (
      <div style={{ padding: 16 }}>
        <h1>Post not found</h1>
        <button onClick={() => navigate("/posts")}>Back</button>
      </div>
    );
  }

  const onDelete = () => {
    softDeletePost(post.id);
    toast.success("Deleted (moved to trash)");
    navigate("/trash");
  };

  return (
    <div style={{ padding: 16 }}>
      <h1>{post.title}</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button onClick={() => navigate(`/posts/${post.id}/edit`)}>Edit</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={() => navigate("/posts")}>Back</button>
      </div>
    </div>
  );
}
