let str = '替换 Microsoft  Micro替换soft Microsof替换t为 Runoob :'

let a = '替换'
let txt = str.replace(new RegExp(a,'g'), '小红')

console.log(txt)

let str1 = '替换156&Microsoft  Micro替换soft& Microsof替换t为& Runoob :'

let abb = str1.split('替换')[1].split('&')[0]

console.log(abb)