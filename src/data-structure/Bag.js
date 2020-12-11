class Bag {
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
  add (item) {
    this.data.push(item)
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
module.exports = Bag
