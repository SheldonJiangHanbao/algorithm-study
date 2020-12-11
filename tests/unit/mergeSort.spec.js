import { expect } from 'chai'
import mergeSort from '../../src/algorithm-api/MergeSort'

describe('归并排序', () => {
  const arr = []
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 200))
  }
  it('排序100个数字', () => {
    const dataSorted = mergeSort(arr)
    let res = true
    for (const index in dataSorted) {
      if (dataSorted[index] > dataSorted[index + 1]) {
        res = false
        break
      }
    }
    expect(res).to.equal(true)
  })
})
