 import axios from "axios";
// import Cookies from "js-cookie";

const instance = axios.create({
  // baseURL: "http://localhost:8080/",
  baseURL: "https://mern-crud-server-wctc.onrender.com",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   let adminInfo;
//   if (Cookies.get("adminInfo")) {
//     adminInfo = JSON.parse(Cookies.get("adminInfo"));
//   }

//   return {
//     ...config,
//     headers: {
//       authorization: adminInfo ? `Bearer ${adminInfo.token}` : null,
//     },
//   };
// });

const responseBody = (response) => response.data;

const requests = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body, headers) =>
    instance.post(url, body, headers).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body, headers) =>
    instance.patch(url, body, headers).then(responseBody),

  delete: (url, body, headers) =>
    instance.delete(url, body, headers).then(responseBody),
};

export default requests; 