// import { expect } from 'chai'
const mergeSort = require('../../src/algorithm-api/MergeSort')
const baseBinarySearch = require('../../src/algorithm-api/BinarySearch')

const arr = []
let val
for (let i = 0; i < 6; i++) {
  if (Math.random() > 0.5) {
    val = Math.floor(Math.random() * 300)
  } else {
    val = -Math.floor(Math.random() * 300)
  }
  arr.push(val)
}
let startTime = 0
let endTime = 0
let time1 = 0
let time2 = 0
const res = []
startTime = new Date().getTime()
for (const item of arr) {
  for (const _item of arr) {
    if (item + _item === 0) {
      res.push(`${item}/${_item}`)
    }
  }
}
endTime = new Date().getTime()
time1 = endTime - startTime

startTime = new Date().getTime()
const dataSorted = mergeSort(arr)
for (const item of arr) {
  if (baseBinarySearch(dataSorted, -item)) {
    res.push(`${item}/${-item}`)
  }
}
endTime = new Date().getTime()
time2 = endTime - startTime
console.log('23', time1 - time2)
// describe('3个整数之和为0的问题', () => {
//   const arr = []
//   let val
//   for (let i = 0; i < 100000; i++) {
//     if (Math.random() > 0.5) {
//       val = Math.floor(Math.random() * 300)
//     } else {
//       val = -Math.floor(Math.random() * 300)
//     }
//     arr.push(val)
//   }
//   it('归并排序+二分查找，比双层循环快', () => {
//     let startTime = 0
//     let endTime = 0
//     let time1 = 0
//     let time2 = 0
//     const res = []
//     startTime = new Date().getTime()
//     for (const item of arr) {
//       for (const _item of arr) {
//         if (item + _item === 0) {
//           res.push(`${item}/${_item}`)
//         }
//       }
//     }
//     endTime = new Date().getTime()
//     time1 = endTime - startTime

//     startTime = new Date().getTime()
//     const dataSorted = mergeSort(arr)
//     for (const item of arr) {
//       if (baseBinarySearch(dataSorted, -item)) {
//         res.push(`${item}/${-item}`)
//       }
//     }
//     endTime = new Date().getTime()
//     time2 = endTime - startTime
//     expect(time1 > time2).to.gt(true)
//   })
// })
