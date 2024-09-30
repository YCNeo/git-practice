function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2)
    }
    return n === 0 ? 0 : 1
}

console.log(fib(0)) // 0
console.log(fib(1)) // 1
console.log(fib(5)) // 5
console.log(fib(10)) // 55

/**
 * when I writing the part of the if(n<1)
 * I found that fib(n - 1) != fib(--n)
 * After debug I know that
 * If I use fib(--n) instead of fib(n-1)
 * Then the second recursive call will become fib((n - 1) - 2)
 * So the answer will be wrong
 */
