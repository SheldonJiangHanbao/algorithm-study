import { expect } from 'chai'
import { baseBinarySearch } from '../../src/algorithm-api/BinarySearch'

describe('测试二分查找方法', () => {
  it('在1到1000的数组中，查找60', () => {
    // 创建模拟数据
    const data = []
    for (let i = 0; i < 1000; i++) {
      data.push(i)
    }
    const res = baseBinarySearch(data, 60)
    console.log('11', res)
    expect(res).to.equal(res)
  })
})
