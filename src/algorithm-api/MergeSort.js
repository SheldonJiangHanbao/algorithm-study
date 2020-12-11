const merge = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  if (left.length === 0) {
    result.push(right)
  }
  if (right.length === 0) {
    result.push(left)
  }
  return result
}
const mergeSort = (arr) => {
  const len = arr.length
  if (len < 2) {
    return arr
  }
  const mid = Math.floor(len / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}
module.exports = mergeSort
