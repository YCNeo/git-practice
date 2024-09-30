// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js'

let stack = new Stack()
stack.print()

stack.push(5)
stack.push(8)
stack.print()

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？

// push [6, 3, 8]
stack.push([6, 3, 8])
stack.print()

// watch top of stack
console.log(stack.peek)

// push {name: 'stack', value: 123}
stack.push({name: 'stack', value: 123})
stack.print()

// watch top of stack
console.log(stack.peek)

// remove top of stack
stack.pop()
stack.print()

// remove top of stack
stack.pop()
stack.print()

// get size of stack
console.log(stack.size)

// clear stack
stack.clear()
stack.print()

// check if isEmpty
console.log(`isEmpty? ${stack.isEmpty}`)
console.log(`size: ${stack.size}`)