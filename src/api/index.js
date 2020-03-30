import axios from "axios";
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// 轮播图  export导出 导出的是一个接口，不能是固定值

// http://132.232.89.22:3000 服IP务端
// axios.defaults.baseURL = 'http://localhost:3003'; //提取公共的请求地址
// axios.defaults.baseURL = 'http://132.232.89.22:3000';
axios.defaults.baseURL = "http://localhost:3005";
// 响应拦截 interceptors  拦截器(过滤器)
//Promise.all => axios.all
axios.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    Promise.reject(err);
  }
);
//返回promise  轮播图请求
const getBanner = () => axios.get("/banner");
// 首页列表的请求
const getList = () => axios.get("/listapi");

//数据分页请求
const getPage = page => {
  return axios.get(`/listapi?page=${page}`);
};

//getHomeAll 执行拿到的结果 [banner：[],list:[]]
const getHomeAll = () => {
  return axios.all([getBanner(), getList()]);
};

//请求详情页  方法一
// const getDetail = (single) => {
//   return axios.get('/listapi').then(data => {
//     // 拿到列表的所有数据 赋值给list
//     const list = data.list;
//     // 筛选出点击的商品数据
//     for (var i = 0; i < list.length; i++) {
//       if (list[i].id === single) {
//         return list[i]
//       }
//     }
//   })
// }

//请求详情页 方法二
const getDetail = id =>
  axios.get("/detail", {
    params: {
      id
    }
  });

//  easymock 数据请求的轮播图
const mockbanner = () => {
  return axios.get(
    "https://www.easy-mock.com/mock/5d258d8670ad6c5e84533797/v/banner"
  );
};

// export { getBanner, getList };
export { getHomeAll, getList, getPage, getDetail, mockbanner };
