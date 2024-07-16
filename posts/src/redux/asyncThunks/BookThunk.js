import { createAsyncThunk } from "@reduxjs/toolkit";

// constants and api
import { api } from "../../api/api";
import { RESPONSE_CREATED, RESPONSE_OK } from "../../constants/Constants";

export const getBooksListing = createAsyncThunk(
  "BOOKSTORE/getBooksListing",
  async (thunkAPI) => {
    try {
      const response = await api({ endpoint: "books", method: "GET" });

      if (
        response.status === RESPONSE_OK ||
        response.status === RESPONSE_CREATED
      ) {
        return response?.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBookDetail = createAsyncThunk(
  "BOOKSTORE/getBookDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await api({
        endpoint: "books",
        method: "GET",
        id: payload,
      });

      if (
        response.status === RESPONSE_OK ||
        response.status === RESPONSE_CREATED
      ) {
        return response?.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchedBook = createAsyncThunk(
  "BOOKSTORE/getSearchedBook",
  async (payload, thunkAPI) => {
    try {
      const response = await api({
        endpoint: "books",
        method: "GET",
        params: payload,
      });

      if (
        response.status === RESPONSE_OK ||
        response.status === RESPONSE_CREATED
      ) {
        return response?.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
