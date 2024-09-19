function sum1(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function sum2(n) {
    return (n * (n + 1)) / 2;
}

// TODO: 每次都是從 1 加到 10000，這樣的測試結果準確嗎？不同的程式語言結果一樣嗎？
//       OS 在 CPU 的處理上，會不會有 cache?
// TODO: 換成小一點的數字，結果如何？

const times = 100
const number = 10

console.time('sum2');
for (let i = 0; i < times; i++) {
    sum2(number);
}
console.timeEnd('sum2');

console.time('sum1');
for (let i = 0; i < times; i++) {
    sum1(number);
}
console.timeEnd('sum1');


// console.time('sum3');
// for (let i = 0; i < times; i++) {
//     sum1(number);
// }
// console.timeEnd('sum3');

// console.time('sum4');
// for (let i = 0; i < times; i++) {
//     sum2(number);
// }
// console.timeEnd('sum4');