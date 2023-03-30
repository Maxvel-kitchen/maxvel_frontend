import axios from "axios";
import { API_POSITION, API_POSITION_ON_CATEGORIES } from "./api";

const getNewPositions = async (setPositions) => {
  try {
    const response = await axios.get(API_POSITION);
    setPositions(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getPositions = async (setPositions, categorySlug) => {
  try {
    const response = await axios.get(API_POSITION_ON_CATEGORIES + categorySlug);
    console.log(response.data);
    setPositions(response.data);
  } catch (error) {
    console.error(error);
  }
};

export { getNewPositions, getPositions };
