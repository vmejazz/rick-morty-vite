import axios from "axios";
import { useDispatch } from "react-redux";
import { setAppLoading } from "../store/slices/appReducer";

const baseInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const request = (endPoint: string) =>
  baseInstance.get(endPoint).then((res) => res.data);
