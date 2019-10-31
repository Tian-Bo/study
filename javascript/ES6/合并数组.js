/*
 * @Author: tianbo
 * @LastEditors: tianbo
 * @Date: 2019-10-23 10:42:57
 * @LastEditTime: 2019-10-23 11:17:41
 */
let arr1 = [
    {
        voucher_time: [
            {
                "name": "简简单单",
                "time": "2019-10-22 18:00:18",
                "user_id": "137233"
            }
        ],
        ticket_name: "儿童套餐"
    },
    {
        voucher_time: [
            {
                "name": "简简单单",
                "time": "2019-10-22 18:08:44",
                "user_id": "137233"
            },
            {
                "name": "简简单单",
                "time": "2019-10-22 18:08:51",
                "user_id": "137233"
            }
        ],
        ticket_name: "儿童套餐"
    }
]

let arr = []
arr1.forEach(item => {
    arr = arr.concat(item.voucher_time)
})

console.log(arr)




