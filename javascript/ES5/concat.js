let arr1 = [
    {
        plugin_id: 24,
        plugin_name: "助力免单",
        plugin_desc: "分享次数达标可免单",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/general_03.png",
        switch: true,
        plugin_status: true,
        path: null
    },
    {
        plugin_id: 12,
        plugin_name: "助力免单",
        plugin_desc: "分享次数达标可免单",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/general_03.png",
        switch: true,
        plugin_status: true,
        path: null
    },
    {
        plugin_id: 15,
        plugin_name: "助力免单",
        plugin_desc: "分享次数达标可免单",
        plugin_img: "//huodongge-1254430703.file.myqcloud.com/uploads/image/20190926/general_03.png",
        switch: true,
        plugin_status: true,
        path: null
    },
]

let arr2 = [
    {
        plugin_id: 12,
        plugin_name: "助力免单",
    },
    {
        plugin_id: 15,
        plugin_name: "助力免单",
    },
    {
        plugin_id: 27,
        plugin_name: "助力免单",
    },
]


let arr = arr1.filter(ele => {
    return arr2.filter(item => {
        if (ele.plugin_id == item.plugin_id) {
            ele.switch = false
        }
    })
})

console.log(arr)