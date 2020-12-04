let data = []
const test = (i) => {
  let start = 0
  let end = data.length - 1
  let mid = -1
  let midVal = -1
  let count = 0
  while (start <= end) {
    mid = Math.ceil((start + end) / 2)
    midVal = data[mid]
    count++
    if (i === midVal) {
      return count
    }
    if (i < midVal) {
      end = mid - 1
    }
    if (i > midVal) {
      start = mid + 1
    }
  }
  return data.length
}

export const baseBinarySearch = (arr, targtVal) => {
  data = arr
  return test(targtVal)
}
