//Axios Imports
import axios from "axios";

// Constants and Utils Imports
import {API_URL} from "../constants/Constants"
import { convertObjToQueryString } from "../utils/utils";

export const api = async (data) => {
  const { endpoint, method, payloadData, id, params } = data;

  try {
    const url = `${API_URL}/${endpoint}${id ? `/${id}` : ""}${
      params ? `${convertObjToQueryString(params)}` : ""
    }`;
    const headers = {};
    if (!(payloadData instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }
    const response = await axios({
      url,
      method,
      data: payloadData,
      headers,
    });
    const responseData = await response;
    return responseData;
  } catch (error) {
    console.log("Fetch API Error:", error);
    throw error;
  }
};
