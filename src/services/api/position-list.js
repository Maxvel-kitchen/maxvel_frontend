/* eslint-disable consistent-return */
import axios from "axios";
import { API_POSITION, API_POSITION_ON_CATEGORIES } from "./api";

const getNewPositions = async () => {
  try {
    const response = await axios.get(API_POSITION);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getPositions = async (setPositions, categorySlug) => {
  try {
    const response = await axios.get(API_POSITION_ON_CATEGORIES + categorySlug);
    console.log(response.data);
    setPositions(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getNewPositions, getPositions };
