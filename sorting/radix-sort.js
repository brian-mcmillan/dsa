
function getDigit(num, place) {
  // ex: num = 12345, place = 0, returns 5
  // ex: num = 12345, place= 3, returns 2
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function countDigits(num) {
  // ex: num = 12345, returns 5
  // guard clause
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  // ex: num = [1, 123, 1234, 12345, 123456], returns 6
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
    let upper = mostDigits(nums);
    for (let i = 0; i < upper; i++) {
        let digitBuckets = Array.from({length:10}, () => []);
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return console.log(nums)
}

