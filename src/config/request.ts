import axios from 'axios';
// import QS from 'qs';
/* tslint:disable  */
import { getToken, removeToken } from './token';
axios.defaults.baseURL = '/';
axios.interceptors.request.use(
  (config) => {
    //  请求头
    const token = getToken();
    if (token) {
      const mytoken = JSON.parse(token);
      document.cookie='tktoken=' + mytoken.token;
      config.headers.common.Authorization = 'a ' + mytoken.token; // 让每个请求携带token ['X-Token'] 为自定义key
    }
    return config;
  },
  (error) => {
    // Do something with request error
    // console.log(error) // for
    return Promise.reject(error);
  }
);

// respone interceptor
let that = this;
let flag = true;

axios.interceptors.response.use(
  (response) => {
    // loading.hide(response.config);
    const res = response.data;
    if (res.status !== 200) {
      if (res.status === 401) {
        removeToken();
      } else if (res.status === 403) {
        removeToken();
      } 
      return res;
    } else {
      return response.data
    }
  },
  (error) => {
    // loading.hide(error.config);
    if (error.response && error.status === 401) {
      // removeToken();
      that.$message(error.msg);

      // if (error.config.url.indexOf("layout") === -1) {
      //     // message.error("登录信息已过期，请重新登录！");
      // }
    } else if (error.response && error.response.status === 500) {
      return Promise.reject(error);
    } else if (error.message && error.message.indexOf('timeout') > -1) {
      //   message.error("网络超时!");
    } else if (error === '403') {
      //   message.error("没有请求权限!");
    } else {
      //   message.error("网络错误!");
    }
    Promise.reject(error);
  }
);
export default axios;
