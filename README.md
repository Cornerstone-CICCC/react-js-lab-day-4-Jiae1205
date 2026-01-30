[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jeLufwmI)
# React JS - Lab Day 4

**Goal:** Create a multi-page CRUD application with React and Zustand. This is similar to the previous lab exercise but with a different state management library and extra features.

## Instructions ✅

1. Create a new React project by running `npm create vite@latest lab-4-crud-zustand`.
2. Create at least six routes for your application with `react-router-dom`:

    - Home `/`
    - Posts Listing `/posts` (only non-deleted items will show up)
    - Post Detail `/posts/1` (where 1 is the id)
    - Add Post `/posts/new`
    - Edit Post `/posts/1/edit` (where 1 is the id)
    - Deleted `/trash` (only deleted items will show up)

3. Implement CRUD functionality for the blog. Store the data and CRUD functions inside a Zustand store like `post.store.ts`. Use Zustand's `persist()` function to keep the data in `localStorage`. For the properties, set them to:

    - id `string` (uuid)
    - title `string`
    - content `string`
    - isDeleted `boolean`

4. Add a **Create** button to the posts listing page which redirects you to the *Add Post* route.
5. Clicking on a post in the posts listing page will redirect you to the detail page.
6. Add an **Edit** button inside the post detail page which redirects you to the *Edit Post* route to modify the title and content.
7. Add a **Delete** button inside the post detail page which will update the `isDeleted` property to `true`. You can install a toast package such as `react-hot-toast` for the deleted notification. The deleted post should now appear in the `/trash` page.
8. On the trash listing page, add a **Recover** button beside each post which will update its `isDeleted` property to `false`. You can add a toast notification for the recovered notification.
9. On the same trash listing page, add another button called **Delete permanently** which will delete the post from the Zustand store array.
10. Commit and push your changes once you are done.

Good luck! 🎉🎉🎉
