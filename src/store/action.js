import { getDataApi, getDataApiSuccess } from "./contant";

export const getData = () => {
  console.log("run action: ", getDataApi);
  return {
    type: getDataApi,
  };
};
export const getDataSuccess = (payload) => {
  return {
    type: getDataApiSuccess,
    payload,
  };
};
