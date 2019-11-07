/*
 * @Author: tianbo
 * @LastEditors: tianbo
 * @Date: 2019-10-22 10:51:21
 * @LastEditTime: 2019-10-23 11:48:34
 */
let arr = [32, 33, 16, 40];

let new_arr = arr.filter((ele) => {
    return ele >= 18;
});


let arr3 = [
    {
        plugin_id: 21,
        plugin_name: "消息通知",
        plugin_desc: "短信/微信消息通知",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/code.png",
        switch: true,
        plugin_status: true,
        path: "/newsnotice"
    },
    {
        plugin_id: 21,
        plugin_name: "渠道推广",
        plugin_desc: "短信/微信消息通知",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/code.png",
        switch: true,
        plugin_status: true,
        path: "/newsnotice"
    },
    {
        plugin_id: 21,
        plugin_name: "微信服务号",
        plugin_desc: "短信/微信消息通知",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/code.png",
        switch: true,
        plugin_status: true,
        path: "/newsnotice"
    },
    {
        plugin_id: 21,
        plugin_name: "自定义表单",
        plugin_desc: "短信/微信消息通知",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/code.png",
        switch: true,
        plugin_status: true,
        path: "/newsnotice"
    }
]

console.log(new_arr)

let new_arr3 = arr3.filter(ele => {
    return ele.plugin_name.includes('自定')
})

console.log(new_arr3)
console.log(arr3.includes('自定义表单'))