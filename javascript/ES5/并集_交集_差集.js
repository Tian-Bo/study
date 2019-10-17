
// TODO 数组去重

let a = [1, 2, 3, 9, 10]
let b = [2, 4, 5, 6]

// 并集 以属于A或属于B的元素为元素的集合成为A与B的并（集） 记作A∪B（或B∪A），读作“A并B”（或“B并A”），即A∪B={x|x∈A,或x∈B}
let union = a.concat(b.filter(v => !a.includes(v))) // [1,2,3,4,5]

// 交集：以属于A且属于B的元素为元素的集合成为A与B的交（集） 记作A∩B（或B∩A），读作“A交B”（或“B交A”），即A∩B={x|x∈A,且x∈B}
let intersection = a.filter(v => b.includes(v)) // [2]

// 差集 以属于A而不属于B的元素为元素的集合成为A与B的差（集）记作A-B（或B∩A），读作“A减B”，即A-B={x∣x∈A,且x∉B}
let difference = a.concat(b).filter(v => a.includes(v) && !b.includes(v)) // [1,3]

// console.log(union)
// console.log(intersection)
// console.log(difference)

// 求交集
// 　　var arr1 = [{name:'name1',id:1},{name:'name2',id:2},{name:'name3',id:3}];
//     var arr1Id = [1,2,3]
//     var arr2 = [{name:'name1',id:1},{name:'name2',id:2},{name:'name3',id:3},{name:'name4',id:4},{name:'name5',id:5}];
//     var result = arr2.filter(function(v){
//         return arr1Id.indexOf(v.id)!==-1 // 利用filter方法来遍历是否有相同的元素
//     })
//     console.log(result);

// 求并集
// 　　let arr1 = [{name:'name1',id:1},{name:'name2',id:2},{name:'name3',id:3}];
//     let arr2 = [{name:'name1',id:1},{name:'name4',id:4},{name:'name5',id:5}];
//     let arr3 = arr1.concat(arr2);
//     let result = [];
//     var obj = [];
//     result = arr3.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur);
//     obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
//     return prev;
//     }, []);
//     console.log(result);

// 求差集
// let arr1 = [{name:'name1',id:1},{name:'name2',id:2},{name:'name3',id:3}];
// let arr1Id = [1,2,3];
// let arr2 = [{name:'name1',id:1},{name:'name4',id:4},{name:'name5',id:5}];
// let arr2Id = [1,4,5];
// let arr3 = arr1.concat(arr2);
// console.log(arr3)
// let result = arr3.filter(function(v){
//     return arr1Id.indexOf(v.id)===-1 || (arr2Id.indexOf(v.id)===-1)
// })
// console.log(result);

// 去重
// 　　let arr = [{name:'name1',id:1},{name:'name2',id:2},{name:'name3',id:3},{name:'name1',id:1},{name:'name4',id:4},{name:'name5',id:5}];
//         var obj = [];
//         let result = arr.reduce(function(prev, cur, index, arr) {
//         console.log(prev, cur);
//         obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
//         return prev;
//     }, []);


// 对象去
// let arr1 = [{ name: 'name1' }, { sex: 'name2' }, { age: 'name3', id: '1' }, { age: 'nam3', id: '1' }]
// let arr2 = [{ name: 'name1' }, { sex: 'name4' }, { age: 'name5' }]

// let result = arr1.filter(function (v) {
//     for (let key in v) {
//         for (let i = 0; i < arr2.length; i++) {
//             for (let item in arr2[i]) {
//                 if (item == key) {
//                     return v[item] != arr2[i][item]     
//                 }
//             }
//         }
//     }
// })

// console.log(result)
