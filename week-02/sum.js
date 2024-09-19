// ary: number array
function sum(ary) {
    return ary.reduce((prev, cur) => prev + cur)
}

console.log(sum([1, 5, 3, 2])) // 11
