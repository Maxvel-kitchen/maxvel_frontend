import axios from "axios";
import { API_CATEGORIES } from "./api";

const getCategories = async (setCategories) => {
  try {
    const response = await axios.get(API_CATEGORIES);
    setCategories(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default getCategories;
