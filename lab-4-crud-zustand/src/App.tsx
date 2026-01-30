import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import PostNew from "./pages/PostNew";
import PostEdit from "./pages/PostEdit";
import Trash from "./pages/Trash";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/trash">Trash</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </BrowserRouter>
  );
}
