import axios from "axios";
import { API_POSITION } from "./api";

const getPositions = async (setCategories) => {
  try {
    const response = await axios.get(API_POSITION);
    console.log(response.data);
    setCategories(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default getPositions;
