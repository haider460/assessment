import { API } from "./API";

export const createUser = (values) => API.post("url", values);
export const getUser = () => API.get("url");
export const updateUser = (values) => API.put("url", values);

//  attach token to the all api if needed
// API.interceptors.request.use((req) => {
//   // req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
