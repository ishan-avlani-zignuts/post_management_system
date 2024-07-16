// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getPosts, deletePosts, editPosts, getPostsDetails } from "../../api/api";

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const res = await getPosts();
//   return res.data;
// });

// export const removePosts = createAsyncThunk("posts/deletePosts", async (id) => {
//   await deletePosts(id);
//   return id;
// });

// export const updatePost = createAsyncThunk(
//   "posts/editPost",
//   async ({ id, post }) => {
//     const response = await editPosts(id, post);
//     return response.data;
//   }
// );

// export const fetchPostsById = createAsyncThunk("posts/fetchPostsDetails", async (id)=>{
//     const res = await getPostsDetails(id)
//     return res.data;
// })

// const PostsSlice = createSlice({
//   name: "posts",
//   initialState: {
//     posts: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPosts.pending, (state) => { 
//         state.loading = true;
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.posts = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(fetchPostsById.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchPostsById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.posts = action.payload;
//       })
//       .addCase(fetchPostsById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(updatePost.fulfilled, (state, action) => {
//         const index = state.posts.findIndex(
//           (post) => post.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.posts[index] = action.payload;
//         }
//       })
//       .addCase(removePosts.fulfilled, (state, action) => {
//         state.posts = state.posts.filter((post) => post.id !== action.payload);
//       });
//   },
// });

// export default PostsSlice.reducer;
