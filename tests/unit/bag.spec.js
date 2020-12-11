import { expect } from 'chai'
import Bag from '../../src/data-structure/Bag'

describe('测出数据结构‘背包’', () => {
  it('构造器-不传值', () => {
    let instance
    let res = 1
    try {
      instance = new Bag()
      res = (instance.data.length === 0 ? 1 : 0)
    } catch (e) {
      res = 0
    }
    expect(res).to.equal(1)
  })
  it('构造器-传递数组', () => {
    let instance
    let res = 1
    try {
      instance = new Bag([1])
      res = (instance.data.length === 1 ? 1 : 0)
    } catch (e) {
      res = 0
    }
    expect(res).to.equal(1)
  })
})
