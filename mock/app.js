// express  框架 node 的框架  js ->jq
const express = require("express");
const cors = require("cors");
const app = express(); // 会自动创建一个服务器
const fs = require("fs").promises; //文件操作
const path = require("path"); //路径

//显示出静态打包文件
// app.use(express.static(path.join(__dirname, "dist")))

function readList(filename) {
  filename = path.resolve(__dirname, filename); //取到文件的绝对路径
  return fs.readFile(filename, "utf-8").then(data => JSON.parse(data));
}
app.listen(3005); // 服务器端口号
console.log("----3005----");
app.use(cors());

// 轮播图接口 访问地址:localhost:3000/banner
const banner = require("./banner");
app.get("/banner", (req, res) => {
  // 模拟服务器网速慢时
  // setTimeout(() => {
  //   res.json({ code: 200, banner });
  // }, 5000)
  res.json({ code: 200, banner });
});

//详情页接口
app.get("/detail", (req, res) => {
  let { id } = req.query;
  readList("./detail.json").then(data => {
    // 通过find方法找到id相同的项目返回第一项
    let detail = data.find(item => item.id == id);
    res.json({
      code: 200,
      data: detail
    });
  });
});

//列表接口  localhost:3000/list
app.get("/listapi", (req, res) => {
  let { page } = req.query; //前端传过来的页面 page=1 里面的 1,2,3
  readList("list.json").then(data => {
    let maxData = 5; //每次拿几条数据
    page -= 1;
    // data 是list.json 里面拿到的数组
    let pagedata = data.slice(page * 5, (page + 1) * 5);
    //如果数据没有了  需要告诉前端
    // (page+1)*5 大于数组的length 表示没有任何数据了
    //定义一个是否有更多数据的变量
    console.log(page);
    let hasMore = !((page + 1) * 5 >= data.length);
    // if判断逻辑
    //如果为首页数据 则为NAN  pagedata = data.slice(NaN,NaN)则为空  走else 用原数据data
    //如果为分页数据 则拿到 page 进行运算
    if (!isNaN(page)) {
      //如果有page 证明是分页获取
      res.json({
        code: 200,
        list: pagedata,
        hasMore //如果没有数据将false返回给前端
      });
    } else {
      //没有就返回全部数据
      res.json({
        code: 200,
        list: data
      });
    }
  });
});

// app. 后面跟着的get post 表示前端发送过来的请求方式
// 参数  1 请求路径 必须加 /
