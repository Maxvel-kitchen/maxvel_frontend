import axios from "axios";
import { API_HEAD_IMAGES } from "./api";
import { getImages } from "../redux/carousel-slice";

const getCarouselImages = async (dispatch) => {
  try {
    const response = await axios.get(API_HEAD_IMAGES);
    dispatch(getImages(response.data));
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
export default getCarouselImages;
