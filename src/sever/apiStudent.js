import axios from "axios";

export const request = axios.create({
  baseURL: "https://63254e184cd1a2834c3c520e.mockapi.io/ap1/v1/todo",
  headers: { Accept: "application/json, text/plain, */*" },
});

export const getApi = async (url) => {
  try {
    const res = await request.get(url);
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};
getApi()
export const putApi = async (url, data) => {
  try {
    const res = await request.put(`${url}/${data.id}`, data);
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};
export const deleteApi = async (url, id) => {
  try {
    const res = await request.delete(`${url}/${id}`);
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};
export const postApi = async (url, data) => {
  try {
    const res = await request.post(url, data);
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};
