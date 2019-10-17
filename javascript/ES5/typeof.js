// console.log(typeof "john")
// console.log(typeof 3.14)
// console.log(typeof NaN )
// console.log(typeof false)
// console.log(typeof [1,2,3,4])
// console.log(typeof {name:'john', age:34})
// console.log(typeof new Date())
// console.log(typeof function () {})
// console.log(typeof myCar)
// console.log(typeof null)

let url = 'https://www.huodongge.cn/app-h5/index.html#/pages/order/order?shop_id=2'


let http = 'https://hdg.saileihudong.vip/app-h5/index.html#/pages/order/order?shop_id=2&token=1cef9422b28a001f91189ff89d0dc9a0'

let getShop_id = http.split('shop_id=')[1].split('&')[0];


console.log(getShop_id)