export const getRequestData = <T>(filter: T) => {
  const keys = Object.keys(filter) as Array<keyof T>;
  const requestData = keys.map((key) => `${key}=${filter[key]}`).join("&");

  return requestData ?? "";
};