import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const request = (endPoint: string) =>
  baseInstance
    .get(endPoint)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return "ERROR";
    });
