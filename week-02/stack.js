// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
    // TODO: # 有特別的意思嗎？請以註解回覆。
    // # 讓 items 變成 private variable，使得外部無法直接取得 items。
    #items

    constructor() {
        this.#items = []
    }

    // 在 stack 頂部加入元素element
    push(element) {
        // TODO
        this.#items.push(element)
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
        // TODO
        this.#items.pop()
    }


    /**
     * 以下三個 method 使用前綴詞 get 讓該 method 在實際被使用時
     * 只要 .method 即可直接以類似變數的呼叫方式執行 method()
     * 即 stack.peek 取代 stack.peek()
     * 用以增加程式的可讀性
     */

    // 回傳 stack 頂部的元素，但不移除它
    get peek() {
        // TODO
        return this.#items[this.#items.length - 1]
    }

    // 檢查 stack 是否為空
    get isEmpty() {
        // TODO
        return this.#items.length === 0 ? true : false
    }

    // 回傳 stack 中元素的個數
    get size() {
        // TODO
        return this.#items.length
    }

    // 清空 stack
    clear() {
        // TODO
        this.#items = []
    }

    // 印出 stack 內容（可選）
    print() {
        // TODO
        console.log(this.#items)
    }
}
