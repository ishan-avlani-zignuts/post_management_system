import React, { useEffect } from "react";
import { fetchPosts, removePosts } from "../redux/actions/PostsSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Data = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removePosts(id));
    console.log("post got deleted");
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h2">
        Posts are...
      </Typography>

      {posts.map((post) => (
        <Box sx={{ display: "flex", flex: 1 }}>
          <Box
            key={post.id}
            sx={{
              width: "500px",
              height: "auto",
              marginBottom: 2,
              backgroundColor: "white",
              color: "black",
            }}
          >
            <Typography variant="h6">{post.title}</Typography>
            <Typography>{post.body}</Typography>
            {/* <Link to={`/edit/${post.id}`}>
              <Button
                variant="outlined"
                sx={{ backgroundColor: "yellow", color: "black", marginTop: 1 }}
              >
                Edit
              </Button>
            </Link> */}
            <Link to={`/edit/${post.id}`}>
              <Button
                variant="outlined"
                sx={{ backgroundColor: "yellow", color: "black", marginTop: 1 }}
              >
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => handleDelete(post.id)}
              sx={{
                backgroundColor: "red",
                color: "white",
                marginTop: 1,
                marginLeft: 1,
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Data;
