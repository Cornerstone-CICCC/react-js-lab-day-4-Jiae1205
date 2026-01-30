import { useMemo } from "react";
import toast from "react-hot-toast";
import { usePostStore } from "../store/post.store";

export default function Trash() {
  // ✅ selector에서 filter 하지 말고 원본 posts만 가져오기
  const posts = usePostStore((s) => s.posts);
  const recoverPost = usePostStore((s) => s.recoverPost);
  const deletePostPermanently = usePostStore((s) => s.deletePostPermanently);

  // ✅ 필터링은 useMemo로 고정
  const deletedPosts = useMemo(
    () => posts.filter((p) => p.isDeleted),
    [posts]
  );

  return (
    <div style={{ padding: 16 }}>
      <h1>Trash</h1>

      <ul style={{ marginTop: 12 }}>
        {deletedPosts.map((p) => (
          <li key={p.id} style={{ padding: 8, borderBottom: "1px solid #ddd" }}>
            <strong>{p.title}</strong>

            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <button
                onClick={() => {
                  recoverPost(p.id);
                  toast.success("Recovered");
                }}
              >
                Recover
              </button>

              <button
                onClick={() => {
                  deletePostPermanently(p.id);
                  toast.success("Deleted permanently");
                }}
              >
                Delete permanently
              </button>
            </div>
          </li>
        ))}
      </ul>

      {deletedPosts.length === 0 && <p>Trash is empty.</p>}
    </div>
  );
}
