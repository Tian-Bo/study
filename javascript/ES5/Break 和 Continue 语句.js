/**
 * title: Break 和 Continue 语句
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i=0; i<arr.length; i++) {
    if (i ==3) break
    console.log(i)
}

console.log('=====================================')

for (let i=0; i<arr.length; i++) {
    if (i ==3) continue
    console.log(i)
}


