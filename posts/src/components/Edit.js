// import React, { useEffect } from "react";
// import { fetchPostsById } from "../redux/actions/PostsSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { Button, Box, Typography } from "@mui/material";
// import { Link, useParams } from "react-router-dom";

// const Edit = () => {
//   const dispatch = useDispatch();
//   const { posts } = useSelector((state) => state.posts);
//     const data = useParams;
// console.log(data)
// const id=2
//   useEffect(() => {
//     dispatch(fetchPostsById(id));
//   }, [dispatch]);
//   return (
//     <Box color="white">
//       welcome to edit
//       <Box>
//         <Typography>Details of post</Typography>
//         {posts.filter((post)=>post.id===id).map((post) => (
//           <Box sx={{ display: "flex", flex: 1 }}>
//             <Box
//               key={post.id}
//               sx={{
//                 width: "500px",
//                 height: "auto",
//                 marginBottom: 2,
//                 backgroundColor: "white",
//                 color: "black",
//               }}
//             >
//               <Typography variant="h6">{post.title}</Typography>
//               <Typography>{post.body}</Typography>
//               <Link to={`/edit/${id}`}>
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     backgroundColor: "yellow",
//                     color: "black",
//                     marginTop: 1,
//                   }}
//                 >
//                   Edit
//                 </Button>
//               </Link>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default Edit;
import React, { useEffect, useState } from "react";
import { fetchPostsById, updatePost } from "../redux/actions/PostsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Typography, TextField } from "@mui/material";
import { useParams, Link } from "react-router-dom";

const Edit = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the post ID from the URL
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(id))
  );

  const [title, setTitle] = useState(post ? post.title : "");
  const [body, setBody] = useState(post ? post.body : "");

  useEffect(() => {
    if (!post) {
      dispatch(fetchPostsById(id));
    } else {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [dispatch, id, post]);

  const handleUpdate = () => {
    dispatch(updatePost({ id, post: { title, body } }));
  };

  return (
    <Box color="white" sx={{ padding: 2 }}>
      <Typography variant="h4">Edit Post</Typography>
      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          padding: 2,
          borderRadius: 1,
        }}
      >
        <TextField
          fullWidth
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          label="Body"
          variant="outlined"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          multiline
          rows={4}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Link to="/">
          <Button variant="outlined" sx={{ marginLeft: 2 }}>
            Cancel
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Edit;
