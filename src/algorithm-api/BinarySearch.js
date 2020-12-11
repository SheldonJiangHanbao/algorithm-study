module.exports = (arr, targtVal) => {
  let start = 0
  let end = arr.length - 1
  let mid = -1
  let midVal = -1
  while (start <= end) {
    mid = Math.ceil((start + end) / 2)
    midVal = arr[mid]
    if (targtVal === midVal) {
      return true
    }
    if (targtVal < midVal) {
      end = mid - 1
    }
    if (targtVal > midVal) {
      start = mid + 1
    }
  }
  return false
}
