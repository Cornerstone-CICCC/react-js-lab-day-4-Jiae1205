import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { usePostStore } from "../store/post.store";

export default function Posts() {
  const navigate = useNavigate();

  // ✅ selector에서 filter 하지 말고 원본 배열만 가져오기
  const posts = usePostStore((s) => s.posts);

  // ✅ 필터링은 컴포넌트에서 메모이제이션
  const visiblePosts = useMemo(
    () => posts.filter((p) => !p.isDeleted),
    [posts]
  );

  return (
    <div style={{ padding: 16 }}>
      <h1>Posts</h1>

      <button onClick={() => navigate("/posts/new")}>Create</button>

      <ul style={{ marginTop: 12 }}>
        {visiblePosts.map((p) => (
          <li
            key={p.id}
            style={{ cursor: "pointer", padding: 8, borderBottom: "1px solid #ddd" }}
            onClick={() => navigate(`/posts/${p.id}`)}
          >
            <strong>{p.title}</strong>
          </li>
        ))}
      </ul>

      {visiblePosts.length === 0 && <p>No posts yet.</p>}
    </div>
  );
}
