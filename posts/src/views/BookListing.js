//Third Party Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//MUI Imports
import { Box, Grid } from "@mui/material";

//Redux and components Imports
// import BookCard from "../components/BookCard";
import { getBooksListing } from "../redux/asyncThunks/BookThunk";

//Layout Imports
// import HorizontalNavBarLayout from "../components/layout/HorizonalNavBar";

const BookListing = () => {
  const dispatch = useDispatch();

//   const bookData = useSelector((state) => state.bookStore.booksData);
  const searchedBook = useSelector((state) => state.bookStore.searchedData);
  const Books = searchedBook?.length > 0 ? searchedBook : bookData;

//   /* The `useEffect` hook in the provided code snippet is used to save the `bookData` to the browser's
// `localStorage` whenever the `bookData` changes. */
//   useEffect(() => {
//     localStorage.setItem("bookData", JSON.stringify(bookData));
//   }, [bookData]);

  useEffect(() => {
    dispatch(getBooksListing());
  }, []);

  return (
    <>
      <Box sx={{ p: 2, mt: 3 }}>
        <Grid container spacing={2} sx={{}}>
          {Books?.length > 0 &&
            Books?.map((book, index) => (
              <Grid item xs={12} sm={6} md={4} xl={2} key={index}>
                {/* <BookCard key={index} book={book} />{" "} */}
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default BookListing;
