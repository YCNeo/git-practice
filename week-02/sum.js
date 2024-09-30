const test = (ary) => {
    console.log(sumOfReduce(ary),
        sumOFForEach(ary),
        sumOfMap(ary));
}

// for input = number
const testN = (n) => {
    const ary = Array.from({ length: n + 1 }, (_, i) => i);
    // console.log(ary);
    test(ary);
}

// ary: number array
function sumOfReduce(ary) {
    return ary.reduce((prev, cur) => prev + cur)
}

const sumOFForEach = (ary) => {
    let sum = 0
    ary.forEach(e => sum += e)
    return sum;
}

const sumOfMap = (ary) => {
    let sum = 0
    ary.map(e => sum += e)
    return sum;
}

// const sumOfFrom = (ary) => {
//     let sum = 0
//     ary.from(e => sum += e)
//     return sum;
// }


test([1, 5, 3, 2])
testN(10)