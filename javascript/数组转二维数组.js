
    let arr = [
        {
            name: '1',
            age: 'nan'
        },
        {
            name: '1',
            age: 'nan'
        }
    ]
function obj2Arr(objArr) {
    return objArr.length > 0 && objArr.map(item => {
        return Object.values(item);
    })
}    
// console.log(obj2Arr(arr))
const toThousands = (val) => {
    let num = (val || 0).toString(),
        result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return result;
}
