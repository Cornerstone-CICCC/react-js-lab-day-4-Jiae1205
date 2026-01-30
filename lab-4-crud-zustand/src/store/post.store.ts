import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Post = {
  id: string;
  title: string;
  content: string;
  isDeleted: boolean;
};

type PostState = {
  posts: Post[];

  addPost: (post: Post) => void;
  updatePost: (id: string, data: Pick<Post, "title" | "content">) => void;

  softDeletePost: (id: string) => void;
  recoverPost: (id: string) => void;
  deletePostPermanently: (id: string) => void;

  getPostById: (id: string) => Post | undefined;
};

export const usePostStore = create<PostState>()(
  persist(
    (set, get) => ({
      posts: [],

      addPost: (post) =>
        set((state) => ({
          posts: [post, ...state.posts],
        })),

      updatePost: (id, data) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        })),

      softDeletePost: (id) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, isDeleted: true } : p
          ),
        })),

      recoverPost: (id) =>
        set((state) => ({
          posts: state.posts.map((p) =>
            p.id === id ? { ...p, isDeleted: false } : p
          ),
        })),

      deletePostPermanently: (id) =>
        set((state) => ({
          posts: state.posts.filter((p) => p.id !== id),
        })),

      getPostById: (id) => get().posts.find((p) => p.id === id),
    }),
    { name: "lab4-posts" }
  )
);
