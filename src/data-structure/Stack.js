class Stack {
  // 构造器
  constructor (arr) {
    this.data = [].concat(arr || [])
  }

  // 获取长度
  size () {
    return this.data.length
  }

  // 判断是否为空
  isEmpty () {
    return !this.data.length
  }

  // 添加一个元素
  push (item) {
    this.data.push(item)
  }

  // 删除最近添加的一个元素
  pop () {
    if (!this.isEmpty()) {
      return this.data.pop()
    }
  }

  // 添加迭代方法
  forEach (callback) {
    for (const item of this.data) {
      callback(item)
    }
  }

  // 添加迭代器
  * [Symbol.iterator] () {
    for (const item of this.data) {
      yield item
    }
  }
}
const str = '( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )'
const opts = new Stack()
const vals = new Stack()
const strArr = str.split(' ')
let opt1 = 0
let opt2 = 0
for (const content of strArr) {
  if (content === '(') continue
  if (['+', '*'].includes(content)) {
    opts.push(content)
  }
  if (/^[\d]*$/.test(content)) {
    vals.push(content)
  }
  if (content === ')') {
    opt2 = vals.pop()
    opt1 = vals.pop()
    vals.push(eval(`${opt1} ${opts.pop()} ${opt2}`))
  }
}
module.exports = Stack