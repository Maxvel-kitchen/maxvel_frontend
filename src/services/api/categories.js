/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { API_CATEGORIES } from "./api";

export const categories = async (setCategories) => {
  try {
    const response = await axios.post(API_CATEGORIES);
    setCategories(response.data);
  } catch (error) {
    console.error(error);
  }
};
