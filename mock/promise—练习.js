//promise 当连续调用then的返回值为数据时将可以拿到数据 如果没有写返回值则下一次为undefined
new Promise((resolve, reject) => {
  resolve(1)
}).then(data => {
  console.log(data)  // 打印出 1
  return data
}).then(data => {
  console.log(data)  //打印出 1
}).then(data => {
  console.log(data) //打印出 undefined
})

//Promise.all 返回一个数组
let p1 = new Promise((resolve, reject) => {
  resolve(1)
})
let p2 = new Promise((resolve, reject) => {
  resolve(2)
})
let p3 = Promise.all([p1, p2])
console.log(p3)[1, 2]
