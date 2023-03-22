/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { API_CALL_ME } from "./api";

export const callMe = async (form) => {
  const config = {
    phone: form.phone,
    comment: form.comment,
  };
  try {
    const response = await axios.post(API_CALL_ME, config);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
